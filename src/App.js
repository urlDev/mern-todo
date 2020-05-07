import React from 'react';

import TodoContextProvider from './Context';

import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import SubmitForm from './components/submitForm/SubmitForm';

import Particles from 'react-particles-js';

import { Container } from './App.styles';

const particleOptions = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 4,
    },
  },
};

function App() {
  return (
    <TodoContextProvider>
      <Particles className="particles" params={particleOptions} />
      <Container>
        <Header />
        <TodoList />
        <SubmitForm />
      </Container>
    </TodoContextProvider>
  );
}

export default App;
