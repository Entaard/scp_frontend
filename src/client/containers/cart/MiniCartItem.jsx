import React, {Component} from 'react'
import {Link} from 'react-router'

export class MiniCartItem extends Component {
  render() {
    return (
      <li className="item product product-item">
        <div className="product">
          <Link className="product-item-photo"
                to="/product-detail"
                title={this.props.name}>
																			<span className="product-image-container">
																<span className="product-image-wrapper">
																<img className="product-image-photo"
                                     src="images/products/product-16-c1.jpg"
                                     alt={this.props.name}/>
																</span>
																			</span>
          </Link>
          <div className="product-item-details">
            <div className="product-item-name">
              <Link to="/product-detail">{this.props.name}</Link>
            </div>
            <div className="product-item-qty">
              <label className="label">Qty</label>
              <input className="item-qty cart-item-qty"
                     maxLength="12"
                     onChange={() => console.log('change')}
                     value={this.props.quantity}/>
              <button className="update-cart-item"
                      style={{display: 'none'}}
                      title="Update">
                <span>Update</span>
              </button>
            </div>
            <div className="product-item-pricing">
              <div className="price-container">
																					<span className="price-wrapper">
																			<span className="price-excluding-tax">
																			<span className="minicart-price">
																			<span className="price">${this.props.price}</span> </span>
																					</span>
																					</span>
              </div>
              <div className="product actions">
                <div className="secondary">
                  <a
                    className="action delete"
                    title="Remove item">
                    <span>Delete</span>
                  </a>
                </div>
                <div className="primary">
                  <a className="action edit"

                     title="Edit item">
                    <span>Edit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default MiniCartItem;