import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import AuthApi from '../utils/AuthAPI';
import TopNav from '../components/TopNav';
import HotelsPage from '../pages/HotelsPage';
import RoomsPage from '../pages/RoomsPage';

function Routes() {
  return (
    <Switch>
      <RouteRegistration path='/signin' component={SignIn} />
      <RouteRegistration path='/signUp' component={SignUp} />
      <RouteProtected exact path='/hotels' component={HotelsPage} />
      <RouteProtected exact path='/hotels/:id' component={RoomsPage} />
      {/* /dashboard to hotel main page */}
    </Switch>
  );
}

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authApi.auth ? <Component {...props} /> : <Redirect to='/hotels' />
      }
    />
  );
};

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);

  return (
    <Route
      {...rest}
      render={(props) =>
        authApi.auth ? <Component {...props} /> : <Redirect to='/signin' />
      }
    />
  );
};

export default Routes;
