import React, {Component} from 'react'
import {connect} from 'react-redux'
import BlogItem from '../components/BlogItem'
import Product from '../components/Product'
import Swiper from '../components/Swiper'
import InstaFeed from '../components/InstaFeed'
import {HOME} from '../actions/HomeAction'
import {createAction} from '../utils/SagaUtils'

const items = [
  {id: 1, image: '', name: 'Some shirt 1', price: 100},
  {id: 2, image: '', name: 'Some shirt 2', price: 100},
  {id: 3, image: '', name: 'Some shirt 3', price: 100},
  {id: 4, image: '', name: 'Some shirt 4', price: 123},
  {id: 5, image: '', name: 'Some shirt 5', price: 234},
  {id: 6, image: '', name: 'Some shirt 6', price: 221},
  {id: 7, image: '', name: 'Some shirt 7', price: 121},
  {id: 8, image: '', name: 'Some shirt 8', price: 111},
]

export class Home extends Component {
  componentDidMount() {
    this.props.getHome()
  }

  renderProductItem() {
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
          <div className="block fullwidth full-nopad bottom-space">
            <div className="container">
              <Swiper/>
            </div>
          </div>
          <div className="block">
            <div className="container">
              <div className="text-center bottom-space">
                <h1 className="size-lg no-padding">WELCOME TO <span className="logo-font custom-color">Seikō</span>
                  STORE</h1>
                <div className="line-divider"></div>
                <p className="custom-color-alt">Lorem ipsum dolor sit amet, ex eam mundi populo accusamus, aliquam
                  quaestio
                  petentium te cum.
                  <br/> Vim ei oblique tacimates, usu cu iudico graeco. Graeci eripuit inimicus vel eu, eu mel unum
                  laoreet splendide, cu integre apeirian has.
                </p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="box style2 bgcolor1 text-center">
                    <div className="box-icon"><i className="icon icon-truck"></i></div>
                    <h3 className="box-title">FREE SHIPPING</h3>
                    <div className="box-text">Free shipping on all orders over $199</div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box style2 bgcolor2 text-center">
                    <div className="box-icon"><i className="icon icon-dollar"></i></div>
                    <h3 className="box-title">MONEY BACK</h3>
                    <div className="box-text">100% money back guarantee</div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box style2 bgcolor3 text-center">
                    <div className="box-icon"><i className="icon icon-help"></i></div>
                    <h3 className="box-title">ONLINE SUPPORT</h3>
                    <div className="box-text">Service support fast 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="container">
              <ul className="filters filters-product style2">
                <li><a 
                       className="filter-label">All<span className="count"></span></a></li>
                <li><a 
                       className="filter-label active"
                       data-filter=".category1">New<span
                    className="count"></span></a>
                </li>
                <li><a 
                       className="filter-label"
                       data-filter=".category2">Sale<span
                    className="count"></span></a></li>
              </ul>
              <div className="products-grid-wrapper isotope-wrapper">
                <div className="products-grid isotope four-in-row product-variant-4">
                  {this.renderProductItem()}
                </div>
              </div>
            </div>
          </div>
          <InstaFeed />
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getHome: createAction(HOME, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
