import React, {Component} from 'react'
import {Link} from 'react-router'

export class NewAccount extends Component {
  render() {
    return (
      <main className="page-main">
        <div className="block">
          <div className="container">
            <div className="form-card">
              <h3>Personal Information</h3>
              <form className="account-create" action="#">
                <label>First Name<span className="required">*</span></label>
                <input type="text" className="form-control input-lg"/>
                <label>Last Name<span className="required">*</span></label>
                <input type="text" className="form-control input-lg"/>
                <label>E-mail<span className="required">*</span></label>
                <input type="text" className="form-control input-lg"/>
                <label>Password<span className="required">*</span></label>
                <input type="password" className="form-control input-lg"/>
                <div>
                  <button className="btn btn-lg">Create</button>
                  <span className="required-text">* Required Fields</span></div>
                <div className="back">or <Link to="/">Return to Store <i className="icon icon-undo"></i></Link></div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
export default NewAccount;