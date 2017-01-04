import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { AUTH_WITH_EMAIL } from '../../actions/AuthAction'
import { createAction } from '../../utils/SagaUtils'

export class HeaderLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const request = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.authWithEmail(request)
  }

  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  renderError() {
    return (
      <div className="bottom-text" style={{color: 'red'}}>
        {this.props.error}
      </div>
    )
  }

  render() {
    return (
      <div className="header-link dropdown-link header-account">
        <a href="#"><i className="icon icon-user"></i><span className="link-text">Login</span></a>
        <div className="dropdown-container right">
          <div className="title">Registered Customers</div>
          <div className="top-text">If you have an account with us, please log in.</div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="E-mail*"
              required="true"/>
            <input
              id="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Password*"
              required="true"/>
            <button type="submit" className="btn">Sign in</button>
          </form>
          <div className="title">OR</div>
          {this.props.error && this.renderError()}
          <div className="bottom-text">
            Create a <Link to="/account-create">New Account</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.auth.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authWithEmail: createAction(AUTH_WITH_EMAIL, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin);