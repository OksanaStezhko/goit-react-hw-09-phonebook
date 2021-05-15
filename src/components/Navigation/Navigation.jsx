import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/authorization/authSelector';
import style from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
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
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
