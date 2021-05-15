import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
} from './contactActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact = ({ name, number }) => async dispatch => {
  try {
    const allContacts = await axios.get('/contacts');

    if (
      allContacts.data.find(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { name, number };
      dispatch(addContactRequest());
      try {
        const { data } = await axios.post('/contacts', newContact);
        dispatch(addContactSuccess(data));
      } catch (error) {
        dispatch(addContactError(error));
      }
    }
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const deleteContact = idContact => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${idContact}`);
    dispatch(deleteContactSuccess(idContact));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
