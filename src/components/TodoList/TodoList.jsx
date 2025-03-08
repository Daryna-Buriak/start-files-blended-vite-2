import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            todo={todo}
            count={index + 1}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
