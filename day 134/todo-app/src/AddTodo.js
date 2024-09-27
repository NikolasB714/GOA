import React from 'react';
import useTodoForm from './useTodoForm';

const AddTodo = ({ addTodo }) => {
  const [value, handleChange, reset] = useTodoForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
