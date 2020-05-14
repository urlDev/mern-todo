import React, { Component, createContext } from 'react';
import axios from 'axios';

import { NotificationManager } from 'react-notifications';

export const TodoContext = createContext();

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
          await axios.post('http://localhost:3001/', toDo, config);
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
      if (task.length) {
        try {
          await axios.post('http://localhost:3001/', toDo, config);
          this.getAllTodos();
          NotificationManager.success('A new to-do added!', 'Successful!');
        } catch (error) {
          console.log(error.message);
        }
      }
    } else {
      if (task.length) {
        this.setState(
          {
            todo: [...this.state.todo, task],
          },
          () => {
            localStorage.setItem('todo', JSON.stringify(this.state.todo));
          }
        );
        NotificationManager.success('A new to-do added!', 'Successful!');
      }
    }
  };

  deleteTodo = async (id) => {
    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.delete(`http://localhost:3001/${id}`, config);
      this.getAllTodos();
      NotificationManager.success('To-do deleted', 'Successful!');
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

    NotificationManager.success('To-do deleted', 'Successful!');
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

    try {
      await axios.patch(`http://localhost:3001/${id}`, toDo, config);
      this.getAllTodos();
      NotificationManager.success('To-do updated', 'Successful!');
    } catch (error) {
      console.log(error.message);
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
      const response = await axios.get('http://localhost:3001/', config);
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
      await axios.post('http://localhost:3001/users/me', null, config);
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
      await axios.delete(`http://localhost:3001/users`, config);
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
