import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = ({
  todos,
  onDelete,
  onEdit,
  editTodoId,
  updateTodo,
  cancelUpdate,
}) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            key={todo.id}
            todo={todo}
            count={index + 1}
            onDelete={onDelete}
            onEdit={onEdit}
            isEditing={editTodoId === todo.id}
            updateTodo={updateTodo}
            cancelUpdate={cancelUpdate}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
