import React, {Component} from 'react'
import Uploader from '../../../components/uploader/Single'

export class Basic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(data) {
    this.setState({url: data[0].url})
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Create product</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">
              <br/>Add basic information for the product here</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-md-offset-1 col-lg-4">
            <Uploader onChange={this.handleUpload}/>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="sideblock half">
              <h2>Product Name</h2>
              <form className="white">
                <input type="text"
                       className="form-control"/>
              </form>
            </div>
            <div className="sideblock half">
              <h2>Category</h2>
              <form className="white"
                    action="#">
                <div className="select-wrapper">
                  <select className="form-control">
                    <option data-code="US"
                            value="Fedora">Fedora
                    </option>
                  </select>
                </div>
              </form>
            </div>
            <div className="sideblock half">
              <h2>Price</h2>
              <form className="white">
                <input type="text"
                       className="form-control"/>
              </form>
            </div>
            <div className="sideblock half">
              <h2>Quantity</h2>
              <form className="white">
                <input type="text"
                       className="form-control"/>
              </form>
            </div>
            <div className="sideblock">
              <h2>Description</h2>
              <form className="white">
                        <textarea type="text"
                                  className="form-control"/>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12">
          <div>
            <button className="btn btn-alt pull-right"
                    onClick={this.props.nextStep}>Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Basic;
