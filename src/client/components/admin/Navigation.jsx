import React, {Component} from 'react';
import { Link } from 'react-router';

export class Navigation extends Component {
  render() {
    return (
        <div className="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li><Link activeClassName="active"
                      to="/admin">Home</Link></li>
            <li><a href="gallery.html">UPLOAD</a></li>
            <li><a href="blog.html">CATEGORY</a></li>
          </ul>
        </div>
    )
  }
}
export default Navigation;