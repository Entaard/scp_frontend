import React, {Component} from 'react'
import TrainedImage from '../../components/admin/TrainedImage'
import Pagination from '../../components/Pagination'
import {
  GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES
} from '../../actions/ProductAction'
import {createAction} from '../../utils/SagaUtils'
import {connect} from 'react-redux'

export class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0
    }
    this.onPageChange = this.onPageChange.bind(this)
  }

  componentDidMount() {
    this.getProductDetail(this.props.params.id)
  }

  getProductDetail(id) {
    this.props.getProductDetail(id)
  }

  onPageChange(page) {
    this.setState(state => {
      state.currentPage = page.selected
    }, () => {
      this.props.getProductImages({
        id: this.product().id,
        page: this.state.currentPage
      })
    })
  }

  renderImages() {
    return this.product().images.result.map(item => (
      <TrainedImage
        key={item.id}
        item={item}
      />)
    )
  }

  product() {
    return this.props.product.data
  }

  renderConcepts() {
    return this.product().concepts.map(item => (
      <li key={item.id} className={item.is_concept && 'active'}><a><span
        className="value"><span>{item.name}</span></span></a></li>
    ))
  }

  render() {
    const product = this.product()
    if (this.props.product.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="open-left">
        <div className="page-wrapper">
          <div className="page-main">
            <div className="container">
              <div className="page-title">
                <div className="title center">
                  <h1>{product.name}</h1>
                </div>
                <div className="text-wrapper">
                  <p className="text-center">{product.description}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="blog-post">
                    <div className="main-image">
                      <img
                        src={product && product.url}
                        className="zoom"
                        data-zoom-image={product && product.url}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="sideblock half">
                    <h2>Meta</h2>
                    <ul className="simple-list">
                      <li><a>Created: {product.created_at}</a></li>
                      <li><a>By: {product.user.first_name}</a></li>
                    </ul>
                  </div>
                  <div className="sideblock half">
                    <h2>Status: {product.status}</h2>
                    <ul className="simple-list">
                      <li>
                        <button className="btn">Edit</button>
                      </li>
                    </ul>
                  </div>
                  <div className="sideblock half">
                    <h2>Concepts</h2>
                    <ul className="tags">
                      {this.renderConcepts()}
                    </ul>
                  </div>
                  <div className="sideblock half">
                    <h2>Category</h2>
                    <ul className="simple-list">
                      <li><a>{product.category.name}</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-11 col-lg-11">
                  <h2 className="custom-color">
                    Uploaded images ({product.images.total})
                    <a className="btn pull-right">Edit</a>
                  </h2>
                  {this.renderImages()}
                </div>
              </div>
              <div className="row pagination-row">
                <Pagination
                  currentPage={this.state.currentPage}
                  pageCount={product.images.page_count}
                  onPageChange={this.onPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product: state.productDetail
})

const mapDispatchToProps = (dispatch) => ({
  getProductDetail: createAction(GET_ADMIN_PRODUCT_DETAIL, dispatch),
  getProductImages: createAction(GET_ADMIN_PRODUCTS_IMAGES, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
