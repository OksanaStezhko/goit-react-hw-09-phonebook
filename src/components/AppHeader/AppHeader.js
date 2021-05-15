import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import Authorization from '../Authorization';
import Container from '../Container';
import UserMenu from '../UserMenu';
import authSelectors from '../../redux/authorization/authSelector';
// import style from './AppHeader.module.css';

const AppHeader = ({ isAuthenticated }) => {
  return (
    <header>
      <Container>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <Authorization />}
      </Container>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppHeader);
