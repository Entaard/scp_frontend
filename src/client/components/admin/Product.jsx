import React, {Component} from 'react';
import {Link} from 'react-router';

export class AdminProduct extends Component {
  render() {
    const product = this.props.product
    return (
      <div className="product-item large">
        <div className="product-item-inside">
          <div className="product-item-info">
            <div className="product-item-photo">
              <Link to={`/admin/product-detail/${product.id}`}>
                <img
                  className="product-image-photo"
                  src={product.url}
                  alt=""/>
              </Link>
            </div>
            <div className="product-item-details">
              <div className="product-item-name">
                <Link title={product.name}
                      to="/admin-product-detail"
                      className="product-item-link">{product.name}
                </Link>
              </div>
              <div className="price-box"> <span className="price-container">
                <span className="price-wrapper">
                  <span className="price">{product.status}</span>
                </span>
              </span>
              </div>
              <div className="product-item-actions">
                <div className="actions-primary">
                  <Link to={{pathname: "/admin/upload", query: {id: product.id}}}
                        className="btn btn-sm btn-invert">
                    <span>Continue</span>
                  </Link>
                  <button onClick={this.props.deleteProduct}
                          className="btn btn-sm btn-invert">
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
