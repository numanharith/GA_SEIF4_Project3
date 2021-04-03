import React from 'react';
import '../css/Nav.css';
import { NavLink } from 'react-router-dom';
import AuthApi from '../utils/AuthAPI';
import { signout } from '../components/auth-api';

const TopNav = () => {
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
            Hotels
          </NavLink>
        </li>
        <li className='nav-item'>
          {/* below is to user profile */}
          <NavLink className='nav-link' to='/hotels/user'>
            Welcome!
          </NavLink>
        </li>
      </ul>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default TopNav;
