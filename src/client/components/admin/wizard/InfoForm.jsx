import React from 'react'
import {Field, reduxForm} from 'redux-form'

const validate = values => {
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

const warn = values => {
  const warnings = {}
  if (values.price > 9000) {
    warnings.price = 'Hmm, price seem a bit expensive...'
  }
  return warnings
}

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const renderSelector = ({input, label, meta: {touched, error}}) => (
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

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div className="sideblock half">
    { label && <h2>{label}</h2> }
    <input {...input} className="form-control"
           placeholder={label}
           type={type}/>
    {touched && ((error && <span className="has-error">{error}</span>) || (warning &&
    <span className="has-warning">{warning}</span>))}
  </div>
)

const renderHiddenField = ({input, type, url, meta: {touched, error}}) => (
  <div>
    <input {...input} type={type}
           value={url}/>
    {touched && ((error && <span className="has-error">{error}</span>))}
  </div>
)

const renderTextArea = ({input, label, meta: {touched, error, warning}}) => (
  <div className="sideblock">
    { label && <h2>{label}</h2> }
    <textarea  {...input} className="form-control"
               placeholder={label}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

const InfoForm = (props) => {
  const {handleSubmit, pristine, reset, submitting, imgUrl} = props
  return (
    <form className="white"
          onSubmit={handleSubmit}>
      <Field name="prodName"
             label="Product Name"
             type="text"
             component={renderField}/>
      <Field name="category"
             label="Category"
             component={renderSelector}/>
      <Field name="price"
             label="Price"
             type="number"
             component={renderField}/>
      <Field name="description"
             label="Description"
             component={renderTextArea}/>
      <Field name="image"
             type="hidden"
             url={imgUrl}
             component={renderHiddenField}/>
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

export default reduxForm({
  form: 'basic',
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate,
  warn
})(InfoForm)
