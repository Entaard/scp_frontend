import React, {Component} from 'react'
import Uploader from '../../../components/Uploader/Single'
import InfoForm from '../../../components/admin/wizard/InfoForm'
import {CREATE_PRODUCT} from '../../../actions/ProductAction'
import {createAction} from '../../../utils/SagaUtils'
import {connect} from 'react-redux'

export class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(files) {
    if (files && files[0].data) {
      this.setState({url: files[0].data.url})
    }
  }

  handleSubmit = (values) => {
    const logId = this.props.logId
    this.props.createProduct({ ...values, product_id: this.props.product.id, log_id: logId })
      .then(() => this.props.nextStep())
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Create product</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Add basic information for the product</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-md-offset-1 col-lg-4">
            <Uploader onChange={this.handleUpload} defaultUrl={this.props.product && this.props.product.url}/>
          </div>
          <div className="col-md-5 col-lg-6">
            <InfoForm
              initializeForm={this.props.initializeForm}
              categories={this.props.categories}
              imgUrl={this.state.url}
              onSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createProduct: createAction(CREATE_PRODUCT, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Info);
