import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
