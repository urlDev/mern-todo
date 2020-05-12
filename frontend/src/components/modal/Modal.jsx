import React, { useState, useContext } from 'react';
import { TodoContext } from '../../Context';

import { ModalContainer } from './Modal.styles';
import { HeaderContainer } from '../header/Header.styles';

const Modal = () => {
  const [task, setTask] = useState('');
  const { modalOpen, closeModal, updateTodo, oneTodo } = useContext(
    TodoContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(task, oneTodo._id);
    closeModal();
  };

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
            <h1>{oneTodo.description}</h1>
            <span style={{ cursor: 'pointer' }} onClick={closeModal}>
              ⤫
            </span>
          </HeaderContainer>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="How do you want to update it?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
