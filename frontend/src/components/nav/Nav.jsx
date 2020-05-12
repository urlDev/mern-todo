import React, { useContext } from 'react';
import { TodoContext } from '../../Context';

import { StyledNavLink, NavContainer, LinkContainer } from './Nav.styles';

const Nav = () => {
  const { users, signOut } = useContext(TodoContext);
  return (
    <NavContainer>
      <LinkContainer>
        {users.name && <button onClick={signOut}>Sign Out</button>}
        <StyledNavLink exact to="/">
          Tasks
        </StyledNavLink>
        <StyledNavLink to="/users">Profile</StyledNavLink>
      </LinkContainer>
    </NavContainer>
  );
};

export default Nav;
