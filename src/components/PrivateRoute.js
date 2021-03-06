import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/authorization/authSelector';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
