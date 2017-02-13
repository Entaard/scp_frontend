import React, {Component} from 'react'
import OptionForm from '../../../components/admin/wizard/OptionForm'
import {connect} from 'react-redux'
import {ADD_OPTIONS, PUBLISH, REMOVE_OPTION} from '../../../actions/ProductAction'
import {createAction} from '../../../utils/SagaUtils'
import {reset} from 'redux-form'
import {browserHistory} from 'react-router'

export class Option extends Component {
  renderColorBoxes(color) {
    return (
      <div
        key={color}
        className="color-box"
        style={{backgroundColor: color}}>
      </div>
    )
  }

  getColor(id) {
    return this.props.colors.find((color) => color.id == id)
  }

  getSize(id) {
    return this.props.sizes.find((size) => size.id == id)
  }

  handleSubmit(values) {
    this.props.addOptions({
      product_id: this.props.product.id,
      color_id: values.color,
      size_id: values.size,
      quantity: values.quantity
    }).then(this.props.resetForm)
  }

  removeOption(id) {
    this.props.removeOption({
      product_id: this.props.product.id,
      id: id
    })
  }

  renderRows() {
    return this.props.product.attr_products.map((item, index) => (
      <tr key={item.id}>
        <td><strong>{index + 1}</strong></td>
        <td><strong>{this.getSize(item.size_id).name}</strong></td>
        <td><strong>{item.quantity}</strong></td>
        <td>{this.renderColorBoxes(this.getColor(item.color_id).code)}</td>
        <td>
          <a className="btn" onClick={() => {
            this.removeOption(item.id)
          }}>Delete</a>
        </td>
      </tr>
    ))
  }

  handleFinish() {
    if (this.props.product.attr_products.length == 0) {
      alert('Product must have at least one option')
    } else {
      this.props.publish(this.props.product.id)
        .then(() => browserHistory.push('/admin'))
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Product Options</h1>
            <h3 className="text-center" style={{color: '#d2524e'}}>{this.props.product.name}</h3>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Add all available options for the product</p>
          </div>
        </div>
        <div className="col-lg-8 col-lg-push-2">
          <div className="product-info-block creative">
            <div className="product-options more-options">
              <OptionForm
                colors={this.props.colors}
                sizes={this.props.sizes}
                onSubmit={this.handleSubmit.bind(this)}
              />
            </div>
          </div>

          {this.props.product.attr_products.length > 0 &&
          <table className="table table-bordered">
            <tbody>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Size</th>
              <th scope="col">Quantity</th>
              <th scope="col">Color</th>
              <th scope="col">Acion</th>
            </tr>
            {this.renderRows()}
            </tbody>
          </table>}

          <div className="col-sm-12 col-md-12">
            <button
              onClick={this.props.previousStep}
              className="btn btn-alt">
              Previous
            </button>
            <button
              onClick={this.handleFinish.bind(this)}
              className="btn btn-alt pull-right">
              Finish
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  colors: state.configs.colors,
  sizes: state.configs.sizes,
})

const mapDispatchToProps = (dispatch) => ({
  addOptions: createAction(ADD_OPTIONS, dispatch),
  removeOption: createAction(REMOVE_OPTION, dispatch),
  publish: createAction(PUBLISH, dispatch),
  resetForm: () => dispatch(reset('option'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Option);
