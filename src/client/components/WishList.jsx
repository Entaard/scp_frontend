import React, {Component} from 'react'
import {Link} from 'react-router'

export class WishList extends Component {
  render() {
    return (
        <div className="page-main">
          <div className="block">
            <div className="container">
              <div className="cart-table wishlist">
                <div className="table-header">
                  <div className="photo">
                    Product Image
                  </div>
                  <div className="name">
                    Product Name
                  </div>
                  <div className="price">
                    Unit Price
                  </div>
                  <div className="remove">
                    <span className="hidden-sm hidden-xs">Remove</span>
                  </div>
                  <div className="continue">
                    <span className="hidden-sm hidden-xs">Continue</span>
                  </div>
                </div>
                <div className="table-row">
                  <div className="photo">
                    <a href="product.html"><img src="images/products/product-1.jpg"
                                                alt=""/></a>
                  </div>
                  <div className="name">
                    <a href="product.html">Mid Pink Pleated Chiffon Cami</a>
                  </div>
                  <div className="price">
                    $85.00
                  </div>
                  <div className="remove">
                    <a href="#"><span>Remove</span><i className="icon icon-close-2"></i></a>
                  </div>
                  <div className="continue">
                    <a href="#"><span>Continue</span><i className="icon icon-check"></i></a>
                  </div>
                </div>
                <div className="table-row">
                  <div className="photo">
                    <a href="product.html"><img src="images/products/product-2.jpg"
                                                alt=""/></a>
                  </div>
                  <div className="name">
                    <a href="product.html">Mid Pink Pleated Chiffon Cami</a>
                  </div>
                  <div className="price">
                    $185.00
                  </div>
                  <div className="remove">
                    <a href="#"><span>Remove</span><i className="icon icon-close-2"></i></a>
                  </div>
                  <div className="continue">
                    <a href="#"><span>Continue</span><i className="icon icon-check"></i></a>
                  </div>
                </div>
                <div className="table-footer">
                  <Link to="/" className="btn btn-alt">CONTINUE SHOPPING</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default WishList;