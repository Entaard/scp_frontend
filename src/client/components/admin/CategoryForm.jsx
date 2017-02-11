import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class CategoryForm extends Component {

  renderField({input, label, type, meta: {touched, error, warning}}) {
    return (
      <div className="input-inline">
        <h2>{label}</h2>
        <input {...input}
               className="form-control"
               placeholder="Category name"
               type={type}/>
        {touched && ((error && <span className="has-error">{error}</span>) || (warning &&
        <span className="has-warning">{warning}</span>))}
      </div>
    )
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    return (
      <form className="white"
            onSubmit={handleSubmit}>
        <div className="sideblock two-third">
          <Field name="name"
                 label="New category"
                 type="text"
                 component={this.renderField}/>
          <button type="submit"
                  disabled={submitting}
                  className="btn btn-alt pull-right">Add
          </button>
        </div>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 80) {
    errors.name = 'Must be 80 characters or less'
  }
  return errors
}
const warn = (values) => {
  const warnings = {}
  return warnings
}

export default reduxForm({
  form: 'category',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate,
  warn
})(CategoryForm)
