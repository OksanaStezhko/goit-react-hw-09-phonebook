import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { useCollback } from 'react';

import { deleteContact } from '../../redux/contacts/contactOperations';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './ContactListItem.module.css';

const ContactListItem = ({ id, num, listItem }) => {
  const dispatch = useDispatch();
  // без useCollback
  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li className={style.item}>
      <span className={style.num}>{num}.</span>
      {listItem.map(value => (
        <span className={style.info} key={shortid.generate()}>
          {value}
        </span>
      ))}
      <button type="button" className={style.button} onClick={onDeleteContact}>
        <DeleteIcon />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  listItem: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
