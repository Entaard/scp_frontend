import React, { Component } from 'react';
import { Link } from 'react-router';

export class Navigation extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li><Link to="/admin">PRODUCT</Link></li>
          <li><Link to="/admin/upload">UPLOAD</Link></li>
          <li><a href="blog.html">CATEGORY</a></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
