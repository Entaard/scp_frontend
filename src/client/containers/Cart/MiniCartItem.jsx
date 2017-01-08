import React, {Component} from 'react'

export class MiniCartItem extends Component {
  render() {
    return (
        <li className="item product product-item">
          <div className="product">
            <a className="product-item-photo"
               href="#"
               title={this.props.name}>
																			<span className="product-image-container">
																<span className="product-image-wrapper">
																<img className="product-image-photo"
                                     src="images/products/product-16-c1.jpg"
                                     alt={this.props.name}/>
																</span>
																			</span>
            </a>
            <div className="product-item-details">
              <div className="product-item-name">
                <a href="#">{this.props.name}</a>
              </div>
              <div className="product-item-qty">
                <label className="label">Qty</label>
                <input className="item-qty cart-item-qty"
                       maxLength="12"
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
                    <a href="#"
                       className="action delete"
                       title="Remove item">
                      <span>Delete</span>
                    </a>
                  </div>
                  <div className="primary">
                    <a className="action edit"
                       href="#"
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