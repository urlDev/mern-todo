import React, { useContext } from 'react';

import { TodoContext } from '../../Context';

import { HeaderContainer } from './Header.styles.js';

const Header = () => {
  const { todo } = useContext(TodoContext);

  return (
    <HeaderContainer>
      <h1>You have {todo.length} to-do</h1>
    </HeaderContainer>
  );
};

export default Header;
