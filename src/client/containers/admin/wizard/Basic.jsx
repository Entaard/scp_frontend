import React, {Component} from 'react'

export class Basic extends Component {

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
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="main-image">
              <img src="/images/products/large/product-gallery-1.jpg"
                   className="zoom"
                   alt=""
                   data-zoom-image="images/products/large/product-gallery-1.jpg"/>
            </div>
          </div>
          <div className="col-md-5">
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
