import React from 'react';

import { SignInSignUpContainer, StyledLink } from './SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';

const SignIn = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Sign In</h1>
      </HeaderContainer>
      <SignInSignUpContainer>
        <form action="">
          <label htmlFor="signin-email">Email</label>
          <input type="email" id="signin-email" placeholder="Email" required />
          <label htmlFor="signin-password">Password</label>
          <input
            type="text"
            id="signin-password"
            placeholder="Password"
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
