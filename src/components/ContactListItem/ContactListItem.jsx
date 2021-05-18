import React, { useCallback } from 'react';
import shortid from 'shortid';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/contactOperations';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './ContactListItem.module.css';

const ContactListItem = ({ id, num, listItem }) => {
  const dispatch = useDispatch();
  const onDeleteContact = useCallback(id => dispatch(deleteContact(id)), [
    dispatch,
  ]);

  return (
    <li className={style.item}>
      <span className={style.num}>{num}.</span>
      {listItem.map(value => (
        <span className={style.info} key={shortid.generate()}>
          {value}
        </span>
      ))}
      <button
        type="button"
        className={style.button}
        onClick={() => onDeleteContact(id)}
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default ContactListItem;
