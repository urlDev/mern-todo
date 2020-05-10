import React, { useContext } from 'react';
import { TodoContext } from '../../Context';

import { ModalContainer } from './Modal.styles';
import { HeaderContainer } from '../header/Header.styles';
const Modal = () => {
  const { modalOpen, openModal } = useContext(TodoContext);
  return (
    <>
      {modalOpen && (
        <ModalContainer>
          <HeaderContainer
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h1>Update your to-do</h1>
            <span style={{ cursor: 'pointer' }} onClick={openModal}>
              ⤫
            </span>
          </HeaderContainer>
          <form action="">
            <input type="text" placeholder="Enter your todo" />
            <button type="submit">Update</button>
          </form>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
