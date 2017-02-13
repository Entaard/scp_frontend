import React, {Component} from 'react'
import TrainedImage from '../../../components/admin/TrainedImage'
import Uploader from '../../../components/Uploader/Multiple'
import {connect} from 'react-redux'
import {createAction} from '../../../utils/SagaUtils'
import {
  ADD_IMAGES,
} from '../../../actions/ProductAction'

export class Training extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
    this.handleUpload = this.handleUpload.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleDelete(index) {
    this.uploader.handleDelete(index)
  }

  retrieveData() {
    let data = []
    if (this.props.product.images.result.length) {
      for (var i = 0; i < this.props.product.images.result.length; i++) {
        data[i] = {
          upload: true,
          data: {id: this.props.product.images.result[i].id},
          file: {preview: this.props.product.images.result[i].url}
        }
      }
    }
    return data
  }

  componentDidMount() {
    this.setState({files: this.retrieveData()})
  }

  renderImages() {
    return this.state.files.map((data, index) => (
        <TrainedImage
          onClick={() => this.handleDelete(index)}
          upload={data.upload}
          key={index}
          url={data.file.preview}
        />
      )
    )
  }

  handleUpload(files) {
    this.setState({files, error: null})
  }

  validate() {
    const self = this
    if (this.state.files.length) {
      this.props.addImages(this.props.product.id)
        .then(() => self.props.nextStep())
    } else {
      this.setState({error: 'Training image is required'})
    }
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Train product</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Upload images to train your product</p>
          </div>
        </div>
        <div className="newsletter variant1 col-md-5">
          <div className="collapsed-content">
            <form action="#">
              <div className="input-group">
                <input type="text"
                       className="form-control"/>
                <span className="input-group-btn">
                  <Uploader
                    prefix={`/admins/products/${this.props.product.id}`}
                    initData={this.retrieveData()}
                    ref={uploader => this.uploader = uploader}
                    onChange={this.handleUpload}
                  />
                </span>
              </div>
            </form>
            <span className="has-error">{this.state.error}</span>
          </div>
        </div>
        <div className="col-md-11 col-lg-11">
          <h2 className="custom-color">images ({this.state.files.length})</h2>
          {this.renderImages()}
        </div>

        <div className="col-sm-11 col-md-11">
          <button className="btn btn-alt"
                  onClick={this.props.previousStep}>Previous
          </button>
          <button className="btn btn-alt pull-right"
                  onClick={this.validate.bind(this)}>Next
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addImages: createAction(ADD_IMAGES, dispatch),
})

export default connect(null, mapDispatchToProps)(Training);

