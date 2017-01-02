import React, {Component} from 'react'
import {Link} from 'react-router'

export class Login extends Component {
  render() {
    return (
      <div className="page-main">
        <div className="block">
          <div className="container">
            <ul className="breadcrumbs">
              <li><Link to="/"><i className="icon icon-home"></i></Link></li>
              <li>/<span>Logination</span></li>
            </ul>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <div className="row row-eq-height">
              <div className="col-sm-6">
                <div className="form-card">
                  <h4>New Customers</h4>
                  <p>By creating an account with our store, you will be able to move through the checkout process
                    faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                  <div><Link to ='/account-create' className="btn btn-lg"><i className="icon icon-user"></i><span>Create An Account</span></Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-card">
                  <h4>Registered Customers</h4>
                  <p>If you have an account with us, please log in.</p>
                  <form className="account-create" action="#">
                    <label>E-mail<span className="required">*</span></label>
                    <input type="text" className="form-control input-lg"/>
                    <label>Password<span className="required">*</span></label>
                    <input type="password" className="form-control input-lg"/>
                    <div>
                      <button className="btn btn-lg">Create</button>
                      <span className="required-text">* Required Fields</span>
                    </div>
                    <div className="back"><a href="#">Forgot Your Password?</a></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;