import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => { 

test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo')).toBeInTheDocument();
});

test('adds new todo', () => {
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.submit(input.closest('form'));

  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByTestId('todo-1');

  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes todo', () => {
  render(<TodoList />);
  const deleteBtn = screen.getByTestId('delete-1');

  fireEvent.click(deleteBtn);

  expect(screen.queryByTestId('todo-1')).not.toBeInTheDocument();
});
});