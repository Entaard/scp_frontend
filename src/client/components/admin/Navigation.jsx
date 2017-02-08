import React, {Component} from 'react';
import {Link} from 'react-router';
import {addSideBar} from '../../utils/ViewUtils'

export class Navigation extends Component {
  componentDidMount() {
    addSideBar()
  }
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
        <li key={data.name}>
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
