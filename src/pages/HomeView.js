import React, { Component } from 'react';
import Container from '../components/Container';
import fonebook from '../images/fonebook.png';
import style from './Pages.module.css';

class HomeView extends Component {
  render() {
    return (
      <main>
        <Container>
          <h1 className={style.title}>Fonebook for you!</h1>
          <div className={style.box}>
            <img src={fonebook} alt="fonebook" className={style.image} />
            <p className={style.text}>
              Wellcome to our application for managing fone contacts. Your
              contacts will be stored on a remote server and will always be
              available to you on any device connected to the Internet.
              <span className={style.textend}>Try it now!</span>
            </p>
          </div>
        </Container>
      </main>
    );
  }
}

export default HomeView;
