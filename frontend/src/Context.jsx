import React, { Component, createContext } from 'react';
import axios from 'axios';

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
    if (user) {
      this.setState(
        {
          users: user,
        },
        () => this.getAllTodos()
      );
    }
  }

  addTodo = async (task) => {
    const toDo = {
      description: task,
    };
    const token =
      this.state.users.name && localStorage.getItem('userToken').slice(1, -1);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (task.length) {
      try {
        await axios.post('http://localhost:3001/', toDo, config);
        this.getAllTodos();
      } catch (error) {
        console.log(error.message);
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
    } catch (error) {
      console.log(error.message);
    }
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
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoContextProvider;
