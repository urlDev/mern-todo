import React, { Component, createContext } from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  addTodo = (task) => {
    if (task.length) {
      this.setState({
        todo: [...this.state.todo, task],
      });
    }
  };

  deleteTodo = (task) => {
    const newTodo = [...this.state.todo];
    newTodo.splice(this.state.todo.indexOf(task), 1);
    this.setState({
      todo: newTodo,
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          deleteTodo: this.deleteTodo,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoContextProvider;
