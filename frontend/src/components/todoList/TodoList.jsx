import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContext } from '../../Context';
import Modal from '../modal/Modal';
import { TodoContainer } from './TodoList.styles';

const TodoList = () => {
  const { todo, getTodo, deleteTodo, openModal, closeModal } = useContext(
    TodoContext
  );
  return (
    <TodoContainer>
      {todo.length ? (
        todo.map((task) => {
          return (
            <React.Fragment key={uuidv4()}>
              <p>
                <span
                  onClick={() => {
                    openModal();
                    getTodo(task);
                  }}
                >
                  {task.description}
                </span>
                <span
                  onClick={() => {
                    deleteTodo(task._id);
                    closeModal();
                  }}
                >
                  ⤫
                </span>
              </p>
              <Modal />
            </React.Fragment>
          );
        })
      ) : (
        <p>Wow, such empty! Don't you have anything to do? </p>
      )}
    </TodoContainer>
  );
};

export default TodoList;
