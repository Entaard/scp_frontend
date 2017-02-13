import React, {Component} from 'react'
import OptionForm from '../../../components/admin/wizard/OptionForm'
import {connect} from 'react-redux'
import {ADD_OPTIONS, PUBLISH} from '../../../actions/ProductAction'
import {createAction} from '../../../utils/SagaUtils'

export class Option extends Component {
  constructor(props) {
    super(props)
    this.state = {
      row: [],
    }
    this.addRow = this.addRow.bind(this)
  }

  componentDidMount() {
    if (this.props.product.attr_products) {
      const self = this
      const rows = this.props.product.attr_products.map(attr => {
          return {
            code: self.getColor(attr.color_id).code,
            sizeName: self.getSize(attr.size_id).name,
            quantity: attr.quantity
          }
        }
      )
      this.setState({row: rows})
    }
  }

  renderColorBoxes(color) {
    return <div key={color}
                className="color-box"
                style={{backgroundColor: color}}></div>
  }

  getColor(id) {
    return this.props.colors.find((color) => color.id == id)
  }

  getSize(id) {
    return this.props.sizes.find((size) => size.id == id)
  }

  optionParams(values) {
    return {
      product_id: this.props.product.id,
      color_id: values.color,
      size_id: values.size,
      quantity: values.quantity
    }
  }

  addRow(values) {
    const row = Object.assign({}, values);
    row.code = this.getColor(row.color).code
    row.sizeName = this.getSize(row.size).name
    this.setState({
      row: this.state.row.concat([row]),
    })
  }

  handleSubmit = (values) => {
    const self = this
    this.props.addOptions(this.optionParams(values))
      .then(() => {
        self.addRow(values)
      })
  }

  removeRow(e) {
    const array = this.state.row;
    const arr = this.state.data;
    const index = array.indexOf(e.target.value)
    array.splice(index, 1);
    arr.splice(index, 1);
    this.setState({row: array, data: arr});
  }

  renderRows() {
    return this.state.row.map((item, index) => (
      <tr key={index}>
        <td><strong>{index + 1}</strong></td>
        <td><strong>{item.sizeName}</strong></td>
        <td><strong>{item.quantity}</strong></td>
        <td>{this.renderColorBoxes(item.code)}</td>
        <td><a className="btn"
               onClick={this.removeRow.bind(this)}>Delete</a></td>
      </tr>
    ))
  }

  finish() {
    if (!this.state.data.length) {
      alert('Product must have at least one option')
    } else {
      this.props.publish(this.props.product.id)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Product Option</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Add all options for the product here</p>
          </div>
        </div>
        <div className="col-lg-8 col-lg-push-2">
          <div className="product-info-block creative">
            <div className="product-options more-options">
              <OptionForm colors={this.props.colors}
                          sizes={this.props.sizes}
                          onSubmit={this.handleSubmit}/>
            </div>
          </div>
        </div>

        {this.state.row.length &&
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
        </table>
        }

        <div className="col-sm-11 col-md-11">
          <button onClick={this.props.previousStep}
                  className="btn btn-alt">Previous
          </button>
          <button onClick={this.finish.bind(this)}
                  className="btn btn-alt pull-right">Finish
          </button>
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
  publish: createAction(PUBLISH, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Option);

