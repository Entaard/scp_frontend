import React, {Component} from 'react';
import {Link} from 'react-router';

export class Navigation extends Component {
  linkData() {
    return [
      {path: '/admin', name: 'PRODUCT'},
      {path: '/admin/upload', name: 'UPLOAD'},
      {path: '/admin/category', name: 'CATEGORY'}
    ]
  }

  renderMenu() {
    return this.linkData().map(data => {
      return (
        <li>
          <Link
            className={this.isCurrentPath(data.path) && 'active'}
            to={data.path}>
            {data.name}
          </Link>
        </li>
      )
    })
  }

  isCurrentPath(path) {
    return this.props.pathname == path
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <ul className="sidebar-nav">
          {this.renderMenu()}
        </ul>
      </div>
    )
  }
}

export default Navigation;
