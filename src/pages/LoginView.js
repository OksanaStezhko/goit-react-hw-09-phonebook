import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/authorization/authOperetion';

import Container from '../components/Container';
import style from './Pages.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSignIn(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <Container>
          <h2 className={style.title}>Sign in to Fonebook</h2>

          <form
            onSubmit={this.handleSubmit}
            className={style.form}
            autoComplete="off"
          >
            <label className={style.label}>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={style.input}
              />
            </label>

            <label className={style.label}>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
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
  }
}

const mapDispatchToProps = {
  onSignIn: authOperations.signIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
