import React, { Component } from 'react'
require('./Cart.scss')

export class CartItem extends Component {
  render() {
    return (
        <div className="table-row">
          <div className="photo">
            <a href="product.html"><img src="images/products/product-1.jpg"
                                        alt=""/></a>
          </div>
          <div className="name">
            <a href="product.html">{this.props.name}</a>
          </div>
          <div className="price">
            ${this.props.price}
          </div>
          <div className="qty qty-changer">
            <fieldset>
              <input type="button"
                     value="&#8210;"
                     className="decrease"/>
              <input type="text"
                     className="qty-input"
                     value={this.props.quantity}
                     data-min="0"
                     data-max="5"/>
              <input type="button"
                     value="+"
                     className="increase"/>
            </fieldset>
          </div>
          <div className="subtotal">
            $85.00
          </div>
          <div className="remove">
            <a href="#"
               className="icon icon-close-2"></a>
          </div>
        </div>
    )
  }
}

export default CartItem;
