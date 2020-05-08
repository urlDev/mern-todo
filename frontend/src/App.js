import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

import TodoContextProvider from './Context';

import Nav from './components/nav/Nav';
import Todo from './components/todo/Todo';
import Users from './components/users/Users';

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
      <Nav />
      <div className="container">
        <Container>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/users" component={Users} />
          </Switch>
        </Container>
      </div>
    </TodoContextProvider>
  );
}

export default App;