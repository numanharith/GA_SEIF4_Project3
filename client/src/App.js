import './App.css';

import React, { useState, useEffect } from 'react';
// import HomePage from './pages/HomePage';
// import HotelsPage from './pages/HotelsPage';
// import RoomsPage from './pages/RoomsPage';
// import TopNav from './components/TopNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthApi from "./utils/AuthAPI";
import { hasSignned, signout } from "./components/auth-api";
import Routes from './routes/Routes';
// import TopNav from './components/TopNav';

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    readSession();
  }, []);

  const readSession = async () => {
    const res = await hasSignned();
    if (res.data.auth) {
      setAuth(true);
    }
  }

  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <div>
            <Routes />
          </div>
        </Router>
      </AuthApi.Provider>
    </div>
  );
};

export default App;