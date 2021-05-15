import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/authorization/authSelector';
import authOperations from '../../redux/authorization/authOperetion';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import style from './UserMenu.module.css';

const UserMenu = ({ signOut, name }) => (
  <div className={style.container}>
    <span className={style.email}>{name}</span>

    <button type="button" className={style.button} onClick={signOut}>
      <Link to="/login">
        <ExitToAppIcon className={style.icon} />
      </Link>
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  signOut: authOperations.signOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
