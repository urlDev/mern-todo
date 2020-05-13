import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { TodoContext } from '../../Context';

import { SignInSignUpContainer, StyledLink } from '../signIn/SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';

const SignUp = () => {
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
      const response = await axios.post(
        'http://localhost:3001/users/signup',
        input
      );
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
        <h1>Sign Up</h1>
      </HeaderContainer>
      <SignInSignUpContainer>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            name="email"
            id="signin-email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            name="password"
            id="signup-password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit"> Sign Up </button>
        </form>
      </SignInSignUpContainer>
      <>
        <StyledLink to="/users">Already have an account?</StyledLink>
      </>
    </>
  );
};

export default SignUp;
