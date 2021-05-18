import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes';
import authOperations from './redux/authorization/authOperetion';
import AppHeader from './components/AppHeader';
import PrivateRoute from './components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute.js';
import Loader from './components/Loader';

const HomeView = lazy(() =>
  import('./pages/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./pages/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./pages/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./pages/ContactsView' /* webpackChunkName: "contacts-view" */),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsView />
          </PrivateRoute>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginView />
          </PublicRoute>
          <PublicRoute
            path={routes.registration}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterView />
          </PublicRoute>

          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
