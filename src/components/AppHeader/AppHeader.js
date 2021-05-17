import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import Authorization from '../Authorization';
import Container from '../Container';
import UserMenu from '../UserMenu';
import authSelectors from '../../redux/authorization/authSelector';

const AppHeader = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <Container>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <Authorization />}
      </Container>
    </header>
  );
};

export default AppHeader;
