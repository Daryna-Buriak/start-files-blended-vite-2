import { useState } from 'react';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSubmit = event => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    updateTodo(inputValue);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default EditForm;
