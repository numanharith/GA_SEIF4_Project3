import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthApi from '../utils/AuthAPI';
import { signout } from '../components/auth-api';
import '../styles/nav.css'; 

const TopNav = () => {
  const authApi = React.useContext(AuthApi);
  useEffect(() => {
    fetchUserId();
  }, []);

  const [id, getId] = useState('');

  const handleSignOut = async () => {
    const res = await signout();
    authApi.setAuth(res.data.auth);
  };
  
  const fetchUserId = async () => {
    try {
      const fetchUserId = await fetch('/users/profile');
      const userId = await fetchUserId.json();
      await getId(userId);
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <div className='box'>
    <div className='leftBox'>
    <NavLink to='/hotels'>
            <span id='fonts'>Hotels App</span>
          </NavLink>
    </div>
    <div className='rightBox'>
      <ul className='nav justify-content-end'>
        <li className='nav-link'>
          {/* below is to user profile */}
          <NavLink to={`/users/profile/${id}`} onClick={fetchUserId}>
            Account
          </NavLink>
        </li>
        <li className='nav-link' onClick={handleSignOut}>Logout</li>
      </ul>
    </div>
  </div>
    
  );
};

export default TopNav;
