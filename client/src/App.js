import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthApi from './utils/AuthAPI';
import { hasSignned } from './components/auth-api';
import Routes from './routes/Routes';

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
  };

  return (
    <div className='App'>
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
