import React, {Component} from 'react'
import {Link} from 'react-router'

export class Product extends Component {
  render() {
    return (
        <div className="product-item large category1">
          <div className="product-item-inside">
            <div className="product-item-info">

              <div className="product-item-photo">

                <div className="product-item-label label-new"><span>New</span></div>

                <div className="product-item-gallery">

                  <div className="product-item-gallery-main">
                    <a href="#">
                      <img className="product-image-photo"
                           src="images/products/product-10.jpg"
                           alt=""/>
                    </a>
                    <Link to="/product-detail"
                       title="Quick View"
                       className="quick-view-link quick-view-btn">
                      <i className="icon icon-eye"></i><span>Quick View</span>
                    </Link>
                  </div>

                </div>

                <a href="#"
                   title="Add to Wishlist"
                   className="no_wishlist">
                  <i className="icon icon-heart"></i>
                  <span>Add to Wishlist</span>
                </a>
                <div className="product-item-actions">
                  <div className="share-button toBottom">
                    <span className="toggle"></span>
                    <ul className="social-list">
                      <li>
                        <a href="#"
                           className="icon icon-google google"></a>
                      </li>
                      <li>
                        <a href="#"
                           className="icon icon-fancy fancy"></a>
                      </li>
                      <li>
                        <a href="#"
                           className="icon icon-pinterest pinterest"></a>
                      </li>
                      <li>
                        <a href="#"
                           className="icon icon-twitter-logo twitter"></a>
                      </li>
                      <li>
                        <a href="#"
                           className="icon icon-facebook-logo facebook"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="product-item-details">
                <div className="product-item-name">
                  <a title={this.props.name ? this.props.name : ''}
                     href="product.html"
                     className="product-item-link">{this.props.name ? this.props.name : ''}
                  </a>
                </div>
                <div className="price-box">
                  <span className="price-container">
                  <span className="price-wrapper">
                  <span className="price">${this.props.price ? this.props.price : 0.0}</span>
                  </span>
                  </span>
                </div>
                <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                    className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                    className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                <button className="btn add-to-cart"
                        data-product="789123">
                  <i className="icon icon-cart"></i><span>Add to Cart</span>
                </button>
              </div>

            </div>
          </div>
        </div>
    )
  }
}

export default Product;