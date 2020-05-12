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
    this.getAllTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      console.log(this.state.users);
    }
  }

  addTodo = async (task) => {
    const toDo = {
      description: task,
    };

    if (task.length) {
      try {
        await axios.post('http://localhost:3001/', toDo);
        this.getAllTodos();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/${id}`);
      this.getAllTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  updateTodo = async (task, id) => {
    const toDo = {
      description: task,
    };

    try {
      await axios.patch(`http://localhost:3001/${id}`, toDo);
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
    try {
      const response = await axios.get('http://localhost:3001/');
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

  signOut = () => {
    this.setState({
      users: {
        name: '',
        email: '',
        id: '',
      },
    });
  };

  deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      this.setState({
        users: {
          name: '',
          email: '',
          id: '',
        },
      });
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
