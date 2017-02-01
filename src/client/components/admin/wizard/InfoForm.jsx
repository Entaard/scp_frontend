import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class InfoForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.imgUrl != nextProps.imgUrl) {
      this.props.change('image', nextProps.imgUrl)
    }
  }

  renderSelector({input, label, meta: {touched, error}}) {
    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
    return (
      <div className="sideblock half">
        { label && <h2>{label}</h2> }
        <div className="select-wrapper">
          <select className="form-control" {...input}>
            <option value="">Select a category...</option>
            {colors.map(val => <option value={val}
                                       key={val}>{val}</option>)}
          </select>
          {touched && error && <span className="has-error">{error}</span>}
        </div>
      </div>
    )
  }

  renderField({input, label, type, meta: {touched, error, warning}}) {
    return (
      <div className="sideblock half">
        { label && <h2>{label}</h2> }
        <input {...input} className="form-control"
               placeholder={label}
               type={type}/>
        {touched && ((error && <span className="has-error">{error}</span>) || (warning &&
        <span className="has-warning">{warning}</span>))}
      </div>
    )
  }

  renderHiddenField({input, type, url, meta: {error, submitFailed}}) {
    return (
      <div>
        <input {...input} type={type}
               value={url}/>
        {submitFailed && ((error && <span className="has-error">{error}</span>))}
      </div>
    )
  }

  renderTextArea({input, label, meta: {touched, error, warning}}) {
    return (
      <div className="sideblock">
        { label && <h2>{label}</h2> }
        <textarea  {...input} className="form-control"
                   placeholder={label}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    )
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props
    return (
      <form className="white"
            onSubmit={handleSubmit}>
        <Field name="prodName"
               label="Product Name"
               type="text"
               component={this.renderField}/>
        <Field name="category"
               label="Category"
               component={this.renderSelector}/>
        <Field name="price"
               label="Price"
               type="number"
               component={this.renderField}/>
        <Field name="description"
               label="Description"
               component={this.renderTextArea}/>
        <Field name="image"
               type="hidden"
               component={this.renderHiddenField}/>
        <button type="submit"
                className="btn btn-alt pull-right"
                disabled={submitting}>Next
        </button>
        <button type="button"
                className="btn btn-alt"
                disabled={pristine || submitting}
                onClick={reset}>Reset
        </button>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.prodName) {
    errors.prodName = 'Required'
  } else if (values.prodName.length > 80) {
    errors.prodName = 'Must be 80 characters or less'
  }
  if (!values.price) {
    errors.price = 'Required'
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number'
  }
  if (!values.category) {
    errors.category = 'Required'
  }
  if (!values.image) {
    errors.image = 'Image is required'
  }
  return errors
}

const warn = (values) => {
  const warnings = {}
  if (values.price > 9000) {
    warnings.price = 'Hmm, price seem a bit expensive...'
  }
  return warnings
}

export default reduxForm({
  form: 'info',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  warn
})(InfoForm)
