import React from 'react';

import { SignInSignUpContainer, StyledLink } from '../signIn/SignIn.styles';
import { HeaderContainer } from '../header/Header.styles';

const SignUp = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Sign Up</h1>
      </HeaderContainer>
      <SignInSignUpContainer>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" required />
          <label htmlFor="signup-email">Email</label>
          <input type="email" id="signin-email" placeholder="Email" required />
          <label htmlFor="signup-password">Password</label>
          <input
            type="text"
            id="signup-password"
            placeholder="Password"
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
