import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';
import EditForm from '../EditForm/EditForm';

const TodoListItem = ({
  todo,
  count,
  onDelete,
  onEdit,
  isEditing,
  updateTodo,
  cancelUpdate,
}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>

      {isEditing ? (
        <EditForm
          updateTodo={text => updateTodo(todo.id, text)}
          cancelUpdate={cancelUpdate}
          defaultValue={todo.text}
        />
      ) : (
        <>
          <Text>{todo.text}</Text>
          <button
            className={style.deleteButton}
            type="button"
            onClick={() => onDelete(todo.id)}
          >
            <RiDeleteBinLine size={24} />
          </button>
          <button
            className={style.editButton}
            type="button"
            onClick={() => onEdit(todo.id)}
          >
            <RiEdit2Line size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoListItem;
