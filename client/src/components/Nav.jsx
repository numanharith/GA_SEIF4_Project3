import React, { Component } from 'react'
import '../css/Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link">Welcome!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Log Out</a>
          </li>
        </ul>
      </div>
    )
  }
}
