import React, { Component, createContext } from 'react';
import axios from 'axios';

import { NotificationManager } from 'react-notifications';

export const TodoContext = createContext();

const url = `https://urldev-mern-todo.herokuapp.com`;

class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      oneTodo: {},
      users: {
        name: '',
        email: '',
        id: '',
      },
      modalOpen: false,
      deleteUserModalOpen: false,
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    const task = JSON.parse(localStorage.getItem('todo'));

    if (task) {
      this.setState({
        todo: task,
      });
    }

    if (user) {
      this.setState(
        {
          users: user,
        },
        () => {
          this.getAllTodos();
        }
      );
    }
  }

  addTodoFromLocalStorageToDb = () => {
    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { todo } = this.state;

    try {
      todo &&
        todo.map(async (task) => {
          const toDo = {
            description: task,
          };
          await axios.post(`${url}/`, toDo, config);
          this.setState(
            {
              todo: [],
            },
            () => {
              localStorage.removeItem('todo');
            }
          );
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  addTodo = async (task) => {
    const toDo = {
      description: task,
    };
    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (this.state.users.name) {
      try {
        await axios.post(`${url}/`, toDo, config);
        this.getAllTodos();
        NotificationManager.success('A new to-do added!', 'Successful!', 1000);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      this.setState(
        {
          todo: [...this.state.todo, task],
        },
        () => {
          localStorage.setItem('todo', JSON.stringify(this.state.todo));
        }
      );
      NotificationManager.success('A new to-do added!', 'Successful!', 1000);
    }
  };

  deleteTodo = async (id) => {
    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.delete(`${url}/${id}`, config);
      this.getAllTodos();
      NotificationManager.success('To-do deleted', 'Successful!', 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteTodoWithoutUser = (task) => {
    const newTodo = [...this.state.todo];
    newTodo.splice(this.state.todo.indexOf(task), 1);
    this.setState({
      todo: newTodo,
    });

    const localStorageTodo = JSON.parse(localStorage.getItem('todo'));
    const temp = [...localStorageTodo];
    temp.splice(localStorageTodo.indexOf(task), 1);
    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify(temp));

    NotificationManager.success('To-do deleted', 'Successful!', 1000);
  };

  updateTodo = async (task, id) => {
    const toDo = {
      description: task,
    };

    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (this.state.users.name) {
      try {
        await axios.patch(`${url}/${id}`, toDo, config);
        this.getAllTodos();
        NotificationManager.success('To-do updated', 'Successful!', 1000);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const temp = [...this.state.todo];
      temp.splice(this.state.todo.indexOf(this.state.oneTodo), 1);
      this.setState(
        {
          todo: [...temp, task],
        },
        () => {
          localStorage.removeItem('todo');
          localStorage.setItem('todo', JSON.stringify(this.state.todo));
        }
      );
      NotificationManager.success('To-do updated', 'Successful!', 1000);
    }
  };

  getTodo = (task) => {
    this.setState({
      oneTodo: task,
    });
  };

  getAllTodos = async () => {
    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.get(`${url}/`, config);
      const data = response.data;
      this.setState({
        todo: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  loadUser = (user) => {
    this.setState({
      users: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
    });
  };

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  openDeleteUserModal = () => {
    this.setState({
      deleteUserModalOpen: true,
    });
  };

  closeDeleteUserModal = () => {
    this.setState({
      deleteUserModalOpen: false,
    });
  };

  signOut = async () => {
    const token = localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.post(`${url}/users/me`, null, config);
    } catch (error) {
      console.log(error.message);
    }
    this.setState({
      users: {
        name: '',
        email: '',
        id: '',
      },
      todo: [],
    });
    localStorage.clear();
  };

  deleteUser = async () => {
    const token = localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await axios.delete(`${url}/users`, config);
      this.setState({
        users: {
          name: '',
          email: '',
          id: '',
        },
        todo: [],
      });
      localStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          deleteTodoWithoutUser: this.deleteTodoWithoutUser,
          deleteTodo: this.deleteTodo,
          openModal: this.openModal,
          closeModal: this.closeModal,
          loadUser: this.loadUser,
          getTodo: this.getTodo,
          getAllTodos: this.getAllTodos,
          updateTodo: this.updateTodo,
          signOut: this.signOut,
          deleteUser: this.deleteUser,
          openDeleteUserModal: this.openDeleteUserModal,
          closeDeleteUserModal: this.closeDeleteUserModal,
          addTodoFromLocalStorageToDb: this.addTodoFromLocalStorageToDb,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoContextProvider;
