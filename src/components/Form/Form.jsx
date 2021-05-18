import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { addContact } from '../../redux/contacts/contactOperations';

import style from './Form.module.css';

import shortid from 'shortid';
const initialState = { name: '', number: '' };

const Form = () => {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const dispatch = useDispatch();
  const onSubmitForm = useCallback(state => dispatch(addContact(state)), [
    dispatch,
  ]);

  const contactId = shortid.generate();
  const numberId = shortid.generate();

  const resetForm = () => {
    setState(initialState);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitForm(state);
    resetForm();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={contactId}>
        Name:
        <input
          className={style.input}
          type="text"
          name="name"
          id={contactId}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={style.label} htmlFor={numberId}>
        Number:
        <input
          className={style.input}
          type="tel"
          name="number"
          id={numberId}
          value={number}
          onChange={handleChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
