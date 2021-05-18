import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Container from '../components/Container';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContact } from '../redux/contacts/contactOperations';
import { getLoading, getError } from '../redux/contacts/contactSelectors';
import style from './Pages.module.css';

const ContactsView = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <h1 className={style.title}>Phonebook</h1>
        <Form />
        <Filter />
        <h2 className={style.title_second}>Contacts</h2>
        {isError && <h2>{isError}</h2>}

        {isLoading ? <Loader /> : <div className={style.plug}></div>}

        <ContactList />
      </Container>
    </main>
  );
};
export default ContactsView;
