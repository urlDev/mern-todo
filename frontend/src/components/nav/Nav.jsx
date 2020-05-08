import React from 'react';

import { StyledNavLink, NavContainer } from './Nav.styles';

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <StyledNavLink exact to="/">
          Tasks
        </StyledNavLink>
        <StyledNavLink to="/users">Profile</StyledNavLink>
      </ul>
    </NavContainer>
  );
};

export default Nav;
