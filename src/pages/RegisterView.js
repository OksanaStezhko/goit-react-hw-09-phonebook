import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authorization/authOperetion';
import Container from '../components/Container';
import style from './Pages.module.css';

const initState = {
  name: '',
  email: '',
  password: '',
};

const RegisterView = () => {
  const [state, setState] = useState(initState);
  const { name, email, password } = state;
  const dispatch = useDispatch();
  const OnRegistration = useCallback(
    state => {
      dispatch(authOperations.registration(state));
    },
    [dispatch],
  );
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    OnRegistration(state);
    setState(initState);
  };
  return (
    <main>
      <Container>
        <h2 className={style.title}>Registration</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className={style.form}>
          <label className={style.label}>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className={style.input}
            />
          </label>

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
            Register
          </button>
        </form>
      </Container>
    </main>
  );
};

export default RegisterView;
