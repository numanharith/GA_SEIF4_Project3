import React, { Component } from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

export default class TopNav extends Component {
  render() {
    return (
        <div>
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <a className='nav-link'>
                    <Link to='/hotels'>
                        Hotels
                    </Link>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'>
                        Welcome!
                    </a>
                </li>
                <Link to="/">
                <li className='nav-link'>Log Out</li>
                </Link>
            </ul>
        </div>
    );
  }
}
