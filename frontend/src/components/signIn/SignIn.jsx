import React, { useState, useContext } from 'react';
import { TodoContext } from '../../Context';
import axios from 'axios';

import { SignInSignUpContainer, StyledLink } from './SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';

const SignIn = () => {
  const [input, setInput] = useState({});
  const { loadUser } = useContext(TodoContext);

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
      loadUser(data.user);
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
