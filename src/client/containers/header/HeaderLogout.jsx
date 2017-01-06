import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {createAction} from '../../utils/SagaUtils'
import {DE_AUTH} from '../../actions/AuthAction'
require('./Header.scss')

export class HeaderLogout extends Component {
  render() {
    return (
      <div className="header-link dropdown-link header-account">
        <a href="#"><i className="icon icon-user"></i></a>
        <ul className="dropdown-container right">
          <li>
            <Link to="/wish-list">
              <span>WISHLIST</span>
            </Link>
          </li>
          <li>
            <a onClick={this.props.deAuth}>
              <span>LOGOUT</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deAuth: createAction(DE_AUTH, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HeaderLogout);
