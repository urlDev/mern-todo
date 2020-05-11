import React, { Component, createContext } from 'react';
import axios from 'axios';
export const TodoContext = createContext();

class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      users: {
        name: '',
        email: '',
        id: '',
      },
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.getAllTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      console.log(this.state.users);
    }
    // if (prevState.todo !== this.state.todo) {
    //   return this.getAllTodos();
    // }
  }

  addTodo = async (task) => {
    const toDo = {
      description: task,
    };

    if (task.length) {
      try {
        await axios.post('http://localhost:3001/', toDo);
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

  getTodo = (name) => {
    console.log(name);
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
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          deleteTodo: this.deleteTodo,
          getTodo: this.getTodo,
          openModal: this.openModal,
          loadUser: this.loadUser,
          getAllTodos: this.getAllTodos,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoContextProvider;
