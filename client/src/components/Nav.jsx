import React, { Component } from 'react';
import '../css/Nav.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul className='nav justify-content-end'>
                    <li className='nav-item'>
                        <a className='nav-link'>
                            Welcome, {this.props.user.username}!
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Log Out</a>
                    </li>
                </ul>
            </div>
        );
    }
}

// need to update username - to current session username instead
// currently this will display all usernames in database
