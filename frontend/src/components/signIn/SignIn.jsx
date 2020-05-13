import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { TodoContext } from '../../Context';

import { SignInSignUpContainer, StyledLink } from './SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';

const SignIn = () => {
  const [input, setInput] = useState({});
  const { loadUser, getAllTodos } = useContext(TodoContext);

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
      getAllTodos();
      history.push('/users/me');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <h1>Sign In</h1>
      </HeaderContainer>
      <SignInSignUpContainer>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="signin-email">Email</label>
          <input
            type="email"
            name="email"
            id="signin-email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label htmlFor="signin-password">Password</label>
          <input
            type="password"
            name="password"
            id="signin-password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit"> Sign In </button>
        </form>
      </SignInSignUpContainer>
      <>
        <StyledLink to="/users/signup">Don't have an account?</StyledLink>
      </>
    </>
  );
};

export default SignIn;
