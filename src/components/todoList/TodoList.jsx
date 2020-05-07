import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContext } from '../../Context';

import { TodoContainer } from './TodoList.styles';

const TodoList = () => {
  const { todo, deleteTodo } = useContext(TodoContext);
  return (
    <TodoContainer>
      {todo.length ? (
        todo.map((task) => {
          return (
            <React.Fragment key={uuidv4()}>
              <p>
                {task} <span onClick={() => deleteTodo(task)}>⤫</span>
              </p>
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
