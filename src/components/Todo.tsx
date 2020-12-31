import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

const Todo: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const handleInputChang = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChang}
          placeholder="Type a new task here"
          type="text"
          value={task}
        />
        <button type="submit">Add new task</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Todo;