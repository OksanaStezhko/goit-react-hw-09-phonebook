import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authorization/authOperetion';

import Container from '../components/Container';
import style from './Pages.module.css';
const initState = {
  email: '',
  password: '',
};

const LoginView = () => {
  const [state, setState] = useState(initState);
  const { email, password } = state;
  const dispatch = useDispatch();
  const onSignIn = () => dispatch(authOperations.signIn(state));
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignIn();
    setState(initState);
  };

  return (
    <main>
      <Container>
        <h2 className={style.title}>Sign in to Fonebook</h2>

        <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
          <label className={style.label}>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={style.input}
            />
          </label>

          <label className={style.label}>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={style.input}
            />
          </label>

          <button type="submit" className={style.button}>
            Log in
          </button>
        </form>
      </Container>
    </main>
  );
};

export default LoginView;
