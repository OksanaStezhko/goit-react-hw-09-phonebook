import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Authorization.module.css';

const Authorization = () => (
  <ul className={style.auth}>
    <li className={style.auth__item}>
      <NavLink
        to="/register"
        exact
        className={style.auth__link}
        activeClassName={style.auth__link_active}
      >
        Registration
      </NavLink>
    </li>
    <li className={style.auth__item}>
      <NavLink
        to="/login"
        exact
        className={style.auth__link}
        activeClassName={style.auth__link_active}
      >
        Login
      </NavLink>
    </li>
  </ul>
);

export default Authorization;
