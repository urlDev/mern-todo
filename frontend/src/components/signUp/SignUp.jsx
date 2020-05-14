import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { NotificationManager } from 'react-notifications';

import { TodoContext } from '../../Context';

import { SignInSignUpContainer, StyledLink } from '../signIn/SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';
import { Button } from '../button/Button.styles';

const SignUp = () => {
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
      const response = await axios.post(
        'http://localhost:3001/users/signup',
        input
      );
      const { data } = await response;
      const lastToken = data.user.tokens.pop();
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('userToken', JSON.stringify(lastToken.token));
      loadUser(data.user);
      addTodoFromLocalStorageToDb();
      getAllTodos();
      history.push('/users/me');
      NotificationManager.success('Signed up successfully!', 'Welcome!');
    } catch (error) {
      NotificationManager.error("Couldn't sign-up, please try again", 'Error!');
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <h1>Sign Up</h1>
      </HeaderContainer>
      <SignInSignUpContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button style={{ width: '110px' }} type="submit">
            {' '}
            Sign Up{' '}
          </Button>
        </form>
      </SignInSignUpContainer>
      <>
        <StyledLink to="/users">Already have an account?</StyledLink>
      </>
    </>
  );
};

export default SignUp;
