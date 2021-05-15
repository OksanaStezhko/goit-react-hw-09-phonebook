import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppHeader />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            ;
            <PublicRoute
              path={routes.registration}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
            ;
            <Route component={HomeView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
