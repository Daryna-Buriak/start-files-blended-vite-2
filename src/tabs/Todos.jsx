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

  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    const newTodo = {
      id: nanoid(),
      text: inputValue,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const startEditing = id => {
    setEditTodoId(id);
  };

  const updateTodo = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditTodoId(null);
  };

  const cancelUpdate = () => {
    setEditTodoId(null);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {todos.length === 0 ? (
        <Text textAlign="center">There are no todos ...</Text>
      ) : (
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onEdit={startEditing}
          editTodoId={editTodoId}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      )}
    </>
  );
};

export default Todos;
