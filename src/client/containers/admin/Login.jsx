import React, {Component} from 'react'
import {AUTH_WITH_EMAIL} from '../../actions/AuthAction'
import {connect} from 'react-redux'
import {createAction} from '../../utils/SagaUtils'
import LoginForm from '../../components/admin/LoginForm'
var Router = require('react-router');

export class AdminLogin extends Component {

  handleSubmit = (values) => {
    this.props.authWithEmail(values)
      .then(() => Router.browserHistory.push('/admin')
    )
  }

  renderError() {
    return (
      <p style={{color: 'red'}}>
        {this.props.error}
      </p>
    )
  }

  render() {
    return (
      <div className="page-main">
        <div className="block">
          <div className="container">
            <div className="row row-eq-height">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="form-card">
                  <h4>Admin Panel</h4>
                  <p>Please log in to continue.</p>
                  {this.props.error && this.renderError()}
                  <LoginForm onSubmit={this.handleSubmit}/>
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);