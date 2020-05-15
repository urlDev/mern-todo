import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContext } from '../../Context';
import Modal from '../modal/Modal';
import { TodoContainer } from './TodoList.styles';

const TodoList = () => {
  const {
    users,
    todo,
    getTodo,
    deleteTodo,
    deleteTodoWithoutUser,
    openModal,
    closeModal,
  } = useContext(TodoContext);
  return (
    <TodoContainer>
      {todo && todo.length ? (
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
                  {users.name ? task.description : task}
                </span>
                <span
                  onClick={() => {
                    users.name
                      ? deleteTodo(task._id)
                      : deleteTodoWithoutUser(task);
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
