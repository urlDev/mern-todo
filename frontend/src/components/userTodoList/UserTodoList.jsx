import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContext } from '../../Context';
import Modal from '../modal/Modal';
import { TodoContainer } from '../todoList/TodoList.styles';

const UserTodoList = () => {
  const {
    users,
    todo,
    getTodo,
    deleteTodo,
    openModal,
    closeModal,
  } = useContext(TodoContext);
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
                  {users.name ? task.description : task}
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

export default UserTodoList;
