import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterButtons from './FilterButtons';
import ThemeToggle from './ThemeToggle';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <ThemeProvider>
      <Router>
        <div>
          <ThemeToggle />
          <Switch>
            <Route path="/" exact>
              <AddTodo addTodo={addTodo} />
              <FilterButtons setFilter={setFilter} />
              <TodoList
                todos={filteredTodos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </Route>
            <Route path="/completed">
              <TodoList
                todos={todos.filter((todo) => todo.completed)}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </Route>
            <Route path="/active">
              <TodoList
                todos={todos.filter((todo) => !todo.completed)}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </Route>
            <Route path="/settings">
              <ThemeToggle />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
