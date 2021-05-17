import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/authorization/authSelector';
import style from './Navigation.module.css';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <ul className={style.nav}>
      <li className={style.nav__item}>
        <NavLink
          exact
          to="/"
          className={style.nav__link}
          activeClassName={style.nav__link_active}
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li className={style.nav__item}>
          <NavLink
            to="/contacts"
            className={style.nav__link}
            activeClassName={style.nav__link_active}
          >
            My contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
