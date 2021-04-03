import React, { Component } from 'react';
import '../css/Nav.css';
import { NavLink } from 'react-router-dom';

export default class TopNav extends Component {
  render() {
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
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
