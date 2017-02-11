import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import HeaderLogin from './HeaderLogin'
import HeaderLogout from './HeaderLogout'
import MiniCart from '../cart/MiniCart'
import MegaMenu from '../../components/MegaMenu'
import HeaderSearch from '../../components/Search'

export class Header extends Component {
  render() {
    return (
        <header className="page-header variant-2 fullboxed sticky smart">
          <div className="navbar">
            <div className="container">
              <div className="menu-toggle"><a href="#"
                                              className="mobilemenu-toggle">
                <i className="icon icon-menu"></i></a>
              </div>
              {this.props.authenticated && <MiniCart/>}
              <div className="header-links">
                {this.props.authenticated ? <HeaderLogout/> : <HeaderLogin/>}
              </div>
              <HeaderSearch/>
              <div className="header-logo">
                <Link to="/"
                      title="Logo"><img src="/images/logo.png"
                                        alt="Logo"/></Link>
              </div>
              <MegaMenu/>
            </div>
          </div>
        </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Header);
