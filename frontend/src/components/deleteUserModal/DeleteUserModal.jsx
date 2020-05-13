import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { TodoContext } from '../../Context';

import { DeleteUserModalContainer } from './DeleteUserModal.styles';

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
          <div
            style={{
              width: '300px',
              display: 'flex',
              marginLeft: 'auto',
              justifyContent: 'space-between',
            }}
          >
            <button
              style={{ cursor: 'pointer' }}
              onClick={closeDeleteUserModal}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                deleteUser(users.id);
                closeDeleteUserModal();
                history.push('/users');
              }}
            >
              Delete account
            </button>
          </div>
        </DeleteUserModalContainer>
      )}
    </>
  );
};

export default DeleteUserModal;
