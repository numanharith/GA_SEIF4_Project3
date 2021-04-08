import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthApi from '../utils/AuthAPI';
import { signout } from '../components/auth-api';

export const TopNav = () => {
  const authApi = React.useContext(AuthApi);

  const handleSignOut = async () => {
    const res = await signout();
    authApi.setAuth(res.data.auth);
    
  };

  return (
    <div>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/hotels'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          {/* below is to user profile */}
          <NavLink className='nav-link' to='/profile'>
            Account
          </NavLink>
        </li>
      </ul>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};