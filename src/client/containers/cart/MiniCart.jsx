import React, {Component} from 'react'
import {Link} from 'react-router'
import MiniCartItem from './MiniCartItem'

const items = [
  {id: 1, image: '', quantity: 1, name: 'Some shirt 1', price: 50.00},
  {id: 2, image: '', quantity: 1, name: 'Some shirt 2', price: 10.00},
  {id: 3, image: '', quantity: 2, name: 'Some shirt 3', price: 70.00},
  {id: 4, image: '', quantity: 3, name: 'Some shirt 4', price: 123.00},
]

export class MiniCart extends Component {

  renderCartList() {
    return (
      <ol className="minicart-items">
        {items.map((item, index) => (
          <MiniCartItem
            key={item.id}
            quantity={item.quantity}
            name={item.name}
            price={item.price}
          />
        ))}
      </ol>
    )
  }

  render() {
    return (
      <div className="header-link dropdown-link header-cart variant-1">
        <a href="#"> <i className="icon icon-cart"></i> <span className="badge">{items.length}</span></a>
        <div className="dropdown-container right">
          <div className="block block-minicart">
            <div className="minicart-content-wrapper">
              <div className="block-title">
                <span>Recently added item(s)</span>
              </div>
              <a className="btn-minicart-close"
                 title="Close">&#10060;</a>
              <div className="block-content">
                <div className="minicart-items-wrapper overflowed">
                  {this.renderCartList()}
                </div>
                <div className="subtotal"><span className="label"><span>Subtotal</span></span>
                  <div className="amount price-container">
                    <span className="price-wrapper"><span className="price">$587.00</span></span>
                  </div>
                </div>
                <div className="actions">
                  <div className="secondary">
                    <Link to="/cart"
                          className="btn btn-alt">
                      <i className="icon icon-cart"></i><span>View and edit cart</span>
                    </Link>
                  </div>
                  <div className="primary">
                    <a className="btn"
                       href="#">
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

export default MiniCart;
