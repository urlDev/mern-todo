import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { TodoContext } from '../../Context';

import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import UserModal from '../userModal/UserModal';
import DeleteUserModal from '../deleteUserModal/DeleteUserModal';

import { UsersContainer, StyledButton } from './Users.styles';

const Users = () => {
  const { users, openModal, openDeleteUserModal } = useContext(TodoContext);
  return (
    <>
      {users.name ? (
        <UsersContainer>
          <h1>Welcome {users.name}!</h1>

          <StyledButton onClick={openModal}>Update account</StyledButton>
          <StyledButton onClick={openDeleteUserModal}>
            Delete account
          </StyledButton>
        </UsersContainer>
      ) : (
        <Switch>
          <Route exact path="/users" component={SignIn} />
          <Route path="/users/signin" component={SignIn} />
          <Route path="/users/signup" component={SignUp} />
        </Switch>
      )}
      <UserModal />
      <DeleteUserModal />
    </>
  );
};

export default Users;
