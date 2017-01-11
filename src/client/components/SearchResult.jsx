import React, {Component} from 'react';
import Product from './Product';

const items = [
  {id: 1, image: '', quantity: 1, name: 'Some shirt 1', price: 50.00},
  {id: 2, image: '', quantity: 1, name: 'Some shirt 2', price: 10.00},
  {id: 3, image: '', quantity: 2, name: 'Some shirt 3', price: 70.00},
  {id: 4, image: '', quantity: 3, name: 'Some shirt 4', price: 123.00},
]
export class SearchResult extends Component {
  renderResult() {
    return (
        items.map((item, index) => (
            <Product
                key={item.id}
                name={item.name}
                price={item.price}
            />
        ))
    )
  }

  render() {
    return (
        <div className="page-main">
          <div className="block">
            <div className="container">
              <div className="h2-style">Your search for "dress" revealed the following:</div>
              <form className="search-form white">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="input-group input-group-lg">
                      <input type="text"
                             className="form-control"/>
                      <div className="input-group-btn">
                        <button type="submit"
                                className="btn">Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="block bottom-space">
            <div className="container">
              <div className="products-grid four-in-row product-variant-5">
                {this.renderResult()}
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default SearchResult;