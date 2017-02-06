import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class LoginForm extends Component {

  renderField({input, label, type, meta: {touched, error, warning}}) {
    return (
      <div>
        <label>{label}<span className="required">*</span></label>
        <input {...input}
               type={type}
               className="form-control input-lg"/>
        {touched && ((error && <span className="has-error">{error}</span>) || (warning &&
        <span className="has-warning">{warning}</span>))}
      </div>
    )
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    return (
      <form className="account-create"
            onSubmit={handleSubmit}>
        <Field name="email"
               label="E-mail"
               type="email"
               component={this.renderField}/>
        <Field name="password"
               label="Password"
               type="password"
               component={this.renderField}/>
        <div>
          <button type="submit"
                  disabled={submitting}
                  className="btn btn-lg">Sign in
          </button>
          {/*<span className="required-text">* Required Fields</span>*/}
        </div>
        {/*<div className="back"><a href="#">Forgot Your Password?</a></div>*/}
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (values.email.length > 80) {
    errors.email = 'Must be 80 characters or less'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}
const warn = (values) => {
  const warnings = {}
  return warnings
}

export default reduxForm({
  form: 'login',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate,
  warn
})(LoginForm)
