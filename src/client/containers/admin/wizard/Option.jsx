import React, {Component} from 'react'
import OptionForm from '../../../components/admin/wizard/OptionForm'

export class Option extends Component {
  constructor(props) {
    super(props)
    this.state = {
      row: []
    }
  }

  renderColorBoxes(color) {
    return <div key={color}
                className="color-box"
                style={{backgroundColor: `#${color}`}}></div>
  }

  handleSubmit = (values) => {
    this.setState({row: this.state.row.concat([values])})
  }

  removeRow(e) {
    let array = this.state.row;
    let index = array.indexOf(e.target.value)
    array.splice(index, 1);
    this.setState({row: array});
  }

  renderRows() {
    return this.state.row.map((item, index) => (
      <tr key={index}>
        <td><strong>{index + 1}</strong></td>
        <td><strong>{item.size}</strong></td>
        <td><strong>{item.quantity}</strong></td>
        <td>{this.renderColorBoxes(item.color)}</td>
        <td><a className="btn"
               onClick={this.removeRow.bind(this)}>Delete</a></td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Product Option</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">
              <br/>Add all options for the product here</p>
          </div>
        </div>
        <div className="col-lg-8 col-lg-push-2">
          <div className="product-info-block creative">
            <div className="product-options more-options">
              <OptionForm onSubmit={this.handleSubmit}/>
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
          <button onClick={this.props.finish}
                  className="btn btn-alt pull-right">Finish
          </button>
        </div>
      </div>
    )
  }
}

export default Option;

