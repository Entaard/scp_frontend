import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class OptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: {},
      size: {},
      colors: [],
      sizes: []
    }
  }

  onSelectSize(sizeId) {
    const size = this.props.sizes.find((size) => size.id == sizeId)
    this.setState({size: size});
  }

  renderSizeSelector({input, label, meta: {touched, error}}) {
    return (
      <div className="sideblock third">
        { label && <h2>{label}</h2> }
        <div className="select-wrapper">
          <select
            className="form-control"
            {...input}
            onChange={event => {
              this.onSelectSize(event.target.value)
              input.onChange(event)
            }}>
            <option value="">Select a size...</option>
            {this.props.sizes.map(val => (
              <option
                value={val.id}
                key={val.id}>
                {val.name}
              </option>
            ))}
          </select>
          {touched && error && <span className="has-error">{error}</span>}
        </div>
      </div>
    )
  }

  onSelectColor(colorId) {
    const color = this.props.colors.find((color) => color.id == colorId)
    this.setState({color: color});
  }

  renderColorSelector({input, label, meta: {touched, error}}) {
    return (
      <div className="sideblock third">
        { label && <h2 style={{display: 'inline-block'}}>{label}</h2> }
        <div
          className="color-box"
          style={{backgroundColor: this.state.color.hex}}>
        </div>
        <div className="select-wrapper">
          <select
            className="form-control"
            {...input}
            onChange={event => {
              this.onSelectColor(event.target.value)
              input.onChange(event)
            }}>
            <option value="">Select a color...</option>
            {this.props.colors.map(val =>
              <option
                style={{color: `${val.hex}`}}
                value={val.id}
                key={val.id}>
                {val.hex}
              </option>)
            }
          </select>
          {touched && error && <span className="has-error">{error}</span>}
        </div>
      </div>
    )
  }

  renderField({input, label, type, meta: {touched, error, warning}}) {
    return (
      <div className="sideblock third">
        { label && <h2>{label}</h2> }
        <input {...input} className="form-control"
               placeholder={label}
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
        <Field name="size"
               label="Size"
               component={this.renderSizeSelector.bind(this)}/>
        <Field name="color"
               label="Color"
               component={this.renderColorSelector.bind(this)}/>
        <Field name="quantity"
               label="Quantity"
               type="number"
               component={this.renderField}/>
        <div className="product-actions">
          <div className="actions">
            <button
              type="submit"
              disabled={submitting}
              className="btn">
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}
const validate = (values) => {
  const errors = {}
  if (!values.size) {
    errors.size = 'Required'
  }
  if (!values.color) {
    errors.color = 'Required'
  }

  if (!values.quantity) {
    errors.quantity = 'Required'
  } else if (isNaN(Number(values.quantity))) {
    errors.quantity = 'Must be a number'
  }
  return errors
}

const warn = (values) => {
  const warnings = {}
  if (values.price > 2000) {
    warnings.price = 'Hmm, seem a bit too many...'
  }
  return warnings
}

export default reduxForm({
  form: 'option',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate,
  warn
})(OptionForm)
