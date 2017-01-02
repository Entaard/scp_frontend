import React, {Component} from 'react'
import {Link} from 'react-router'

export class HeaderLogin extends Component {
  render() {
    return (
      <div className="header-link dropdown-link header-account">
        <a href="#"><i className="icon icon-user"></i><span className="link-text">Login</span></a>
        <div className="dropdown-container right">
          <div className="title">Registered Customers</div>
          <div className="top-text">If you have an account with us, please log in.</div>
          <form action="#">
            <input type="text" className="form-control" placeholder="E-mail*"/>
            <input type="text" className="form-control" placeholder="Password*"/>
            <button type="submit" className="btn">Sign in</button>
          </form>
          <div className="title">OR</div>
          <div className="bottom-text">Create a <Link to="/account-create">New Account</Link></div>
        </div>
      </div>
    )
  }
}

export default HeaderLogin;