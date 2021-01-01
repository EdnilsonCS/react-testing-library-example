import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Tests from Todo component', () => {
  it('Should add new task when form has been submitted', async () => {
    render(<Todo />);
    const newTask = 'testing';
    const fieldNode = screen.getByPlaceholderText('Type a new task here');

    fireEvent.change(fieldNode, { target: { value: newTask } });

    const btnNode = screen.getByText('Add new task');

    fireEvent.click(btnNode);

    const tdNode = screen.getByText(newTask);

    expect(tdNode).toBeDefined();
  });
});
