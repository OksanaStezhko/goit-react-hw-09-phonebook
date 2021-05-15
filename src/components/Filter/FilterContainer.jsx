import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { changeFilter } from '../../redux/contacts/contactActions';
import { getFilter } from '../../redux/contacts/contactSelectors';

import Filter from './Filter';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: ({ currentTarget }) => {
      return dispatch(changeFilter(currentTarget.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
