import React, {Component} from 'react';
import {Link} from 'react-router';

import AdminNavigation from '../../components/AdminNavigation';
import AdminProduct from '../../components/AdminProduct';
require('./admin.scss');

let items = []
for (let i = 0; i < 16; i++) {
  items.push({id: i, image: '', name: `Some shirt ${i}`, price: 100 + i});
}
export class AdminHome extends Component {
  renderProducts() {
    return (
        items.map((item, index) => (
            <AdminProduct
                name={item.name}
                price={item.price}
                key={item.id}
            />
        ))
    )
  }

  render() {
    return (
        <div className="open-panel">
          <div id="wrapper">
            <div className="page-wrapper">
              <AdminNavigation/>
              <div className="page-main">
                <div className="row">
                  <div className="col-sm-8 col-md-11">

                    <div className="filter-row">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-left">
                          <div className="filter-button">
                            <a href="#"
                               className="btn filter-col-toggle"><i className="icon icon-filter"></i><span>FILTER</span></a>
                          </div>
                          <div className="form-label">Sort by:</div>
                          <div className="select-wrapper-sm">
                            <select className="form-control input-sm">
                              <option value="latest">Latest</option>
                              <option value="oldest">Oldest</option>
                              <option value="Unfinished">Unfinished</option>
                            </select>
                          </div>
                          <div className="directions">
                            <a href="#"><i className="icon icon-arrow-down"></i></a>
                            <a href="#"><i className="icon icon-arrow-up"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="bg-striped"></div>
                    </div>

                    <div className="title">
                      <h2>Latest</h2>
                    </div>
                    <div className="products-grid isotope three-in-row product-variant-1 sale-products">
                      {this.renderProducts()}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="pagination pull-right">
                      <li><a href="#"><i className="icon icon-angle-left"></i></a></li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#"><i className="icon icon-angle-right"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default AdminHome;