import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import AuthApi from '../utils/AuthAPI';
import HotelsPage from '../pages/HotelsPage';
import RoomsPage from '../pages/RoomsPage';
import BookingPage from '../pages/BookingPage';

function Routes() {
    return (
        <Switch>
            <RouteRegistration path='/signin' component={SignIn} />
            <RouteRegistration path='/signUp' component={SignUp} />
            <RouteProtected exact path='/hotels' component={HotelsPage} />
            <RouteProtected exact path='/hotels/:id' component={RoomsPage} />
            <Route
                exact
                path='/hotels/:hotelid/:roomid'
                component={BookingPage}
            />
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
                !authApi.auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/hotels' />
                )
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
                authApi.auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/signin' />
                )
            }
        />
    );
};

export default Routes;
