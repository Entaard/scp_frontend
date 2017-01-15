import React, {Component} from 'react';
import {Link} from 'react-router';

export class AdminProduct extends Component {
  render() {
    return (
        <div className="product-item large">
          <div className="product-item-inside">
            <div className="product-item-info">

              <div className="product-item-photo">
                <Link to="/admin-product-detail"> <img className="product-image-photo"
                                             src="images/products/product-13.jpg"
                                             alt=""/> </Link>

              </div>

              <div className="product-item-details">
                <div className="product-item-name"><Link title={this.props.name}
                                                      to="/admin-product-detail"
                                                      className="product-item-link">{this.props.name}</Link></div>
                <div className="price-box"> <span className="price-container"> <span className="price-wrapper"><span className="price">{this.props.price}</span> </span>
														</span>
                </div>
                <div className="product-item-actions">
                  <div className="actions-primary">
                    <button className="btn btn-sm btn-invert">
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default AdminProduct;
