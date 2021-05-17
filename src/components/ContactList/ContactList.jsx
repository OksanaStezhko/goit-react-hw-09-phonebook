import React from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { getVisibleContacts } from '../../redux/contacts/contactSelectors';
import style from './ContactList.module.css';

const ContactList = () => {
  const contactList = useSelector(getVisibleContacts);
  console.log(contactList);
  return (
    <ul className={style.list}>
      {contactList.map(({ id, ...dataContact }, index) => (
        <ContactListItem
          key={id}
          id={id}
          num={index + 1}
          listItem={Object.values(dataContact)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
