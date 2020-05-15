import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { TodoContext } from '../../Context';

import {
  DeleteUserModalContainer,
  ButtonContainer,
} from './DeleteUserModal.styles';
import { Button } from '../button/Button.styles';

const DeleteUserModal = () => {
  const {
    deleteUserModalOpen,
    closeDeleteUserModal,
    users,
    deleteUser,
  } = useContext(TodoContext);
  let history = useHistory();
  return (
    <>
      {deleteUserModalOpen && (
        <DeleteUserModalContainer>
          <div
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h1>Are you sure you want to delete your account?</h1>
            <span style={{ cursor: 'pointer' }} onClick={closeDeleteUserModal}>
              ⤫
            </span>
          </div>
          <ButtonContainer>
            <Button
              style={{ cursor: 'pointer' }}
              onClick={closeDeleteUserModal}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                deleteUser(users.id);
                closeDeleteUserModal();
                history.push('/users');
              }}
            >
              Delete account
            </Button>
          </ButtonContainer>
        </DeleteUserModalContainer>
      )}
    </>
  );
};

export default DeleteUserModal;
