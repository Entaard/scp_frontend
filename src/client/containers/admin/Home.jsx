import React, {Component} from 'react'
import {GET_ADMIN_PRODUCTS, DELETE_PRODUCT} from '../../actions/ProductAction'
import {connect} from 'react-redux'
import {createAction} from '../../utils/SagaUtils'
import Product from '../../components/admin/Product';
import Pagination from '../../components/Pagination'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0
    }
    this.onPageChange = this.onPageChange.bind(this)
  }

  componentDidMount() {
    this.props.getProducts(this.state.currentPage)
  }

  onPageChange(page) {
    this.setState(state => {
      state.currentPage = page.selected
    }, () => {
      this.props.getProducts(this.state.currentPage)
    })
  }

  handleDelete(id) {
    // console.log(id)
    this.props.deleteProduct(id)
  }

  renderProducts() {
    return this.products().result.map(product => (
      <Product
        deleteProduct={() => this.handleDelete(product.id)}
        product={product}
        key={product.id}
      />)
    )
  }

  products() {
    return this.props.products.data
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="page-main">
          <div className="container">
            <div className="col-sm-12 col-md-12">
              <div className="filter-row">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-lg-12 col-left">
                    <div className="filter-button">
                      <a href="#"
                         className="btn filter-col-toggle"><i
                        className="icon icon-filter"></i><span>FILTER</span></a>
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
                <div className="pagination-row">
                  <Pagination
                    currentPage={this.state.currentPage}
                    pageCount={this.products().page_count}
                    onPageChange={this.onPageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: createAction(GET_ADMIN_PRODUCTS, dispatch),
  deleteProduct: createAction(DELETE_PRODUCT, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
