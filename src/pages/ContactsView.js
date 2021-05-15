import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import Container from '../components/Container';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContact } from '../redux/contacts/contactOperations';
import { getLoading, getError } from '../redux/contacts/contactSelectors';
import style from './Pages.module.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { isLoading, isError } = this.props;
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
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  isError: getError(state),
});
const mapDispatchToProps = dispatch => {
  return {
    fetchContact: () => dispatch(fetchContact()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
