import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createAction} from '../../utils/SagaUtils'
import {DE_AUTH} from '../../actions/AuthAction'
require('../header/Header.scss')

export class AdminHeader extends Component {
  render() {
    return (
      <header className="page-header variant-2 dark fullboxed sticky stickydark">
        <div className="navbar">
          <div className="container">
            <div className="menu-toggle"><a href="#"
                                            className="mobilemenu-toggle"><i className="icon icon-menu"></i></a></div>
            <div className="header-links">
              {this.props.authenticated &&
              <div className="header-link dropdown-link header-account">
                <a href="#"><i className="icon icon-user"></i></a>
                <ul className="dropdown-container right">
                  <li onClick={this.props.deAuth}>
                    <a>
                      <span>LOGOUT</span>
                    </a>
                  </li>
                </ul>
              </div>}
            </div>
          </div>
        </div>
      </header>
    )
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deAuth: createAction(DE_AUTH, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);
