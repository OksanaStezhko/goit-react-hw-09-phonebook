import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from '../../redux/authorization/authSelector';
import authOperations from '../../redux/authorization/authOperetion';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import style from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const signOut = () => dispatch(authOperations.signOut());
  return (
    <div className={style.container}>
      <span className={style.email}>{name}</span>

      <button type="button" className={style.button} onClick={signOut}>
        <Link to="/login">
          <ExitToAppIcon className={style.icon} />
        </Link>
      </button>
    </div>
  );
};

export default UserMenu;
