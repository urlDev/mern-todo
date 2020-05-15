import React from 'react';

import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import SubmitForm from '../submitForm/SubmitForm';

const Todo = () => {
  return (
    <>
      <Header />
      <TodoList />
      <SubmitForm />
    </>
  );
};

export default Todo;
