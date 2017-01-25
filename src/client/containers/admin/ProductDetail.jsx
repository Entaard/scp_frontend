import React, {Component} from 'react'
import TrainedImage from '../../components/admin/TrainedImage'
import Pagination from '../../components/Pagination'
import {GET_ADMIN_PRODUCT_DETAIL} from '../../actions/ProductAction'
import {createAction} from '../../utils/SagaUtils'
import {connect} from 'react-redux'

let items = []
for (let i = 0; i < 15; i++) {
  items.push({id: i, image: '', name: `image ${i}`});
}
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

  componentDidUpdate() {
    console.log(this.props.product, 'ssss')
  }

  getProductDetail(id) {
    this.props.getAdminProductDetail(id)
  }

  onPageChange(page) {
    this.setState(state => {
      state.currentPage = page.selected
    }, () => {
      // this.callApi(this.state.currentPage)
    })
  }

  renderImages() {
    return this.props.product.images.result.map(item => (
      <TrainedImage
        key={item.id}
        name={item.url}
      />)
    )
  }

  renderConcepts() {
    return this.props.product.concepts.map(item => (
      <li key={item.id} className={item.is_concept ? 'active': null}><a><span className="value"><span>{item.name}</span></span></a></li>
    ))
  }

  render() {
    return (
      <div className="open-left">
        <div className="page-wrapper">
          <div className="page-main">
            <div className="container">
              <div className="page-title">
                <div className="title center">
                  <h1>{this.props.product ? this.props.product.name : null}</h1>
                </div>
                <div className="text-wrapper">
                  <p className="text-center">{this.props.product ? this.props.product.description : null}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="blog-post">
                    <div className="main-image">
                      <img src={this.props.product ? this.props.product.url : null}
                           className="zoom"
                           alt=""
                           data-zoom-image={this.props.product ? this.props.product.url : null}/>
                    </div>

                  </div>
                </div>
                <div className="col-md-5">
                  <div className="sideblock half">
                    <h2>Meta</h2>
                    <ul className="simple-list">
                      <li><a >Created: {this.props.product ? this.props.product.created_at : null}</a></li>
                      <li><a >By: {this.props.product.user ? this.props.product.user.first_name : null}</a></li>
                    </ul>
                  </div>
                  <div className="sideblock half">
                    <h2>Status: {this.props.product ? this.props.product.status : null}</h2>
                    <ul className="simple-list">
                      <li>
                        <button className="btn">Edit</button>
                      </li>
                    </ul>
                  </div>
                  <div className="sideblock half">
                    <h2>Concepts</h2>
                    <ul className="tags">
                      {this.props.product.images ? this.renderConcepts() : null}
                    </ul>
                  </div>
                  <div className="sideblock half">
                    <h2>Category</h2>
                    <ul className="simple-list">
                      <li><a >{this.props.product.category ? this.props.product.category.name : null}</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-11 col-lg-11">
                  <h2 className="custom-color">Uploaded images
                    <a className="btn pull-right">Edit</a>
                  </h2>
                  {this.props.product.images ? this.renderImages() : null}
                </div>
              </div>
              <div className="row pagination-row">
                <Pagination
                  currentPage={this.state.currentPage}
                  pageCount={10}
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
  getAdminProductDetail: createAction(GET_ADMIN_PRODUCT_DETAIL, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

