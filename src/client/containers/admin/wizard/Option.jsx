import React, {Component} from 'react'
import OptionForm from '../../../components/admin/wizard/OptionForm'
const colors = [
    {id: 1, hex: '#FF850A'},
    {id: 2, hex: '#D2524E'},
    {id: 3, hex: '#333745'},
    {id: 4, hex: '#1C90F3'}
  ],
  sizes = [
    {id: 1, name: 'S'},
    {id: 2, name: 'M'},
    {id: 3, name: 'L'},
    {id: 4, name: 'XL'}
  ]
export class Option extends Component {
  constructor(props) {
    super(props)
    this.state = {
      row: [],
      data: [],
    }
  }

  renderColorBoxes(color) {
    return <div key={color}
                className="color-box"
                style={{backgroundColor: color}}></div>
  }

  getColor(id) {
    return colors.find((color) => color.id == id)
  }

  getSize(id) {
    return sizes.find((size) => size.id == id)
  }

  handleSubmit = (values) => {
    const row = Object.assign({}, values);
    row.hex = this.getColor(row.color).hex
    row.sizeName = this.getSize(row.size).name
    this.setState({
      row: this.state.row.concat([row]),
      data: this.state.data.concat([values])
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
        <td>{this.renderColorBoxes(item.hex)}</td>
        <td><a className="btn"
               onClick={this.removeRow.bind(this)}>Delete</a></td>
      </tr>
    ))
  }

  finish() {
    console.log(this.state);
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
              <OptionForm colors={colors}
                          sizes={sizes}
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

export default Option;

