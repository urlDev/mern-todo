import React, { useState, useContext } from 'react';
import { TodoContext } from '../../Context';

import { ModalContainer } from './Modal.styles';
import { HeaderContainer } from '../header/Header.styles';
import { Button } from '../button/Button.styles';
import { Input } from '../form/Form.styles';

const Modal = () => {
  const [task, setTask] = useState('');
  const { users, modalOpen, closeModal, updateTodo, oneTodo } = useContext(
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
            <h1>{users.name ? oneTodo.description : oneTodo}</h1>
            <span style={{ cursor: 'pointer' }} onClick={closeModal}>
              ⤫
            </span>
          </HeaderContainer>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="How do you want to update it?"
              placeholderTextColor="white"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
            <Button type="submit">Update</Button>
          </form>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
