import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Context';

import { SubmitContainer } from './SubmitForm.styles';

const SubmitForm = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  };

  return (
    <SubmitContainer>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </SubmitContainer>
  );
};

export default SubmitForm;
