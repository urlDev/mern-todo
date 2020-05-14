import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { NotificationManager } from 'react-notifications';

import { TodoContext } from '../../Context';

import { SignInSignUpContainer, StyledLink } from './SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';
import { Button } from '../button/Button.styles';

const SignIn = () => {
  const [input, setInput] = useState({});
  const { loadUser, getAllTodos, addTodoFromLocalStorageToDb } = useContext(
    TodoContext
  );

  let history = useHistory();

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', input);
      const { data } = await response;
      const lastToken = data.user.tokens.pop();
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('userToken', JSON.stringify(lastToken.token));
      loadUser(data.user);
      addTodoFromLocalStorageToDb();
      getAllTodos();
      history.push('/users/me');
      NotificationManager.success('Signed in successfully!', 'Welcome!');
    } catch (error) {
      NotificationManager.error("Couldn't sign-in, please try again", 'Error!');
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <h1>Sign In</h1>
      </HeaderContainer>
      <SignInSignUpContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="signin-email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label htmlFor="signin-password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button style={{ width: '110px' }} type="submit">
            Sign In
          </Button>
        </form>
      </SignInSignUpContainer>
      <>
        <StyledLink to="/users/signup">Don't have an account?</StyledLink>
      </>
    </>
  );
};

export default SignIn;
