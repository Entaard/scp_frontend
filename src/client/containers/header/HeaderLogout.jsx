import React, { Component } from 'react'
import { Link } from 'react-router'

export class HeaderLogout extends Component {
  render() {
    return (
      <div className="header-link dropdown-link header-account">
        <a href="#"><i className="icon icon-user"></i></a>
        <ul className="dropdown-container">
          <li style={{padding:'0', margin: '5px 0 20px'}}>
            <Link to="/wish-list">Wishlist</Link>
          </li>
          <li>
            Sign out
          </li>
        </ul>
      </div>
    )
  }
}

export default HeaderLogout;
