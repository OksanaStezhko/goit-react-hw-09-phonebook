import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { deleteContact } from '../../redux/contacts/contactOperations';
import { getVisibleContacts } from '../../redux/contacts/contactSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contactList: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: idContact => dispatch(deleteContact(idContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
