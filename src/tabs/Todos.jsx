import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';
import { useState, useEffect } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return (
      savedTodos || [
        { id: '1', text: 'Practice more' },
        { id: '2', text: 'Get all tasks done on time' },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    const newTodo = {
      id: nanoid(),
      text: inputValue,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]); // Use functional update
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // Use functional update
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {todos.length === 0 ? (
        <Text textAlign="center">There are no todos ...</Text>
      ) : (
        <TodoList todos={todos} onDelete={deleteTodo} />
      )}
    </>
  );
};

export default Todos;
