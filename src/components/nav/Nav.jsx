import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { TodoContext } from '../../Context';

import { StyledNavLink, NavContainer } from './Nav.styles';

const Nav = () => {
  const { users, signOut } = useContext(TodoContext);
  let history = useHistory();
  return (
    <NavContainer>
      {users.name && (
        <button
          onClick={() => {
            signOut();
            history.push('/users');
          }}
        >
          Sign Out
        </button>
      )}
      <StyledNavLink exact to="/">
        Tasks
      </StyledNavLink>
      <StyledNavLink to="/users">Profile</StyledNavLink>
    </NavContainer>
  );
};

export default Nav;
