import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Context';

import { SubmitContainer } from './SubmitForm.styles';
import { Button } from '../button/Button.styles';
import { Input } from '../form/Form.styles';

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
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter your todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </SubmitContainer>
  );
};

export default SubmitForm;
