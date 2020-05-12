import React, { useContext } from 'react';
import { TodoContext } from '../../Context';

import { DeleteUserModalContainer } from './DeleteUserModal.styles';

const DeleteUserModal = () => {
  const {
    deleteUserModalOpen,
    closeDeleteUserModal,
    users,
    deleteUser,
  } = useContext(TodoContext);
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
          <button
            onClick={() => {
              deleteUser(users.id);
              closeDeleteUserModal();
            }}
          >
            Delete account
          </button>
        </DeleteUserModalContainer>
      )}
    </>
  );
};

export default DeleteUserModal;
