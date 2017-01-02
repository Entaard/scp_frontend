import React, {Component} from 'react';
import {Link} from 'react-router'

export class HeaderCart extends Component {
  render() {
    return (
      <div className="header-link dropdown-link header-cart variant-1">
        <a href="#"> <i className="icon icon-cart"></i> <span className="badge">3</span><span
          className="link-text">My Cart</span></a>
        <div className="dropdown-container right">
          <div className="block block-minicart">
            <div className="minicart-content-wrapper">
              <div className="block-title">
                <span>Recently added item(s)</span>
              </div>
              <a className="btn-minicart-close" title="Close">&#10060;</a>
              <div className="block-content">
                <div className="minicart-items-wrapper overflowed">
                  <ol className="minicart-items">
                    <li className="item product product-item">
                      <div className="product">
                        <a className="product-item-photo" href="#" title="Long sleeve overall">
																			<span className="product-image-container">
																<span className="product-image-wrapper">
																<img className="product-image-photo" src="images/products/product-16-c1.jpg"
                                     alt="Long sleeve overall"/>
																</span>
																			</span>
                        </a>
                        <div className="product-item-details">
                          <div className="product-item-name">
                            <a href="#">Long sleeve overall</a>
                          </div>
                          <div className="product-item-qty">
                            <label className="label">Qty</label>
                            <input className="item-qty cart-item-qty" maxLength="12" value="1"/>
                            <button className="update-cart-item" style={{display: 'none'}} title="Update">
                              <span>Update</span>
                            </button>
                          </div>
                          <div className="product-item-pricing">
                            <div className="price-container">
																					<span className="price-wrapper">
																			<span className="price-excluding-tax">
																			<span className="minicart-price">
																			<span className="price">$139.00</span> </span>
																					</span>
																					</span>
                            </div>
                            <div className="product actions">
                              <div className="secondary">
                                <a href="#" className="action delete" title="Remove item">
                                  <span>Delete</span>
                                </a>
                              </div>
                              <div className="primary">
                                <a className="action edit" href="#" title="Edit item">
                                  <span>Edit</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item product product-item">
                      <div className="product">
                        <a className="product-item-photo" href="#" title="Lace back mini dress">
																			<span className="product-image-container">
																<span className="product-image-wrapper">
																<img className="product-image-photo" src="images/products/product-20.jpg"
                                     alt="Lace back mini dress"/>
																</span>
																			</span>
                        </a>
                        <div className="product-item-details">
                          <div className="product-item-name">
                            <a href="#">Lace back mini dress</a>
                          </div>
                          <div className="product-item-qty">
                            <label className="label">Qty</label>
                            <input className="item-qty cart-item-qty" maxLength="12" value="1"/>
                            <button className="update-cart-item" style={{display: 'none'}} title="Update">
                              <span>Update</span>
                            </button>
                          </div>
                          <div className="product-item-pricing">
                            <div className="price-container">
																					<span className="price-wrapper">
																			<span className="price-excluding-tax">
																			<span className="minicart-price">
																			<span className="price">$79.00</span> </span>
																					</span>
																					</span>
                            </div>
                            <div className="product actions">
                              <div className="secondary">
                                <a href="#" className="action delete" title="Remove item">
                                  <span>Delete</span>
                                </a>
                              </div>
                              <div className="primary">
                                <a className="action edit" href="#" title="Edit item">
                                  <span>Edit</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item product product-item">
                      <div className="product">
                        <a className="product-item-photo" href="#" title="Backless mini dress">
																			<span className="product-image-container">
																<span className="product-image-wrapper">
																<img className="product-image-photo" src="images/products/product-7.jpg"
                                     alt="Backless mini dress"/>
																</span>
																			</span>
                        </a>
                        <div className="product-item-details">
                          <div className="product-item-name">
                            <a href="#">Backless mini dress</a>
                          </div>
                          <div className="product-item-qty">
                            <label className="label">Qty</label>
                            <input className="item-qty cart-item-qty" maxLength="12" value="1"/>
                            <button className="update-cart-item" style={{display: 'none'}} title="Update">
                              <span>Update</span>
                            </button>
                          </div>
                          <div className="product-item-pricing">
                            <div className="price-container">
																					<span className="price-wrapper">
																			<span className="price-excluding-tax">
																			<span className="minicart-price">
																			<span className="price">$369.00</span> </span>
																					</span>
																					</span>
                            </div>
                            <div className="product actions">
                              <div className="secondary">
                                <a href="#" className="action delete" title="Remove item">
                                  <span>Delete</span>
                                </a>
                              </div>
                              <div className="primary">
                                <a className="action edit" href="#" title="Edit item">
                                  <span>Edit</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="subtotal"><span className="label"><span>Subtotal</span></span>
                  <div className="amount price-container">
                    <span className="price-wrapper"><span className="price">$587.00</span></span>
                  </div>
                </div>
                <div className="actions">
                  <div className="secondary">
                    <Link to="/cart" className="btn btn-alt">
                      <i className="icon icon-cart"></i><span>View and edit cart</span>
                    </Link>
                  </div>
                  <div className="primary">
                    <a className="btn" href="#">
                      <i className="icon icon-external-link"></i><span>Go to Checkout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderCart;