import React, {Component} from 'react'
import TrainedImage from '../../../components/admin/TrainedImage'
import Uploader from '../../../components/Uploader/Multiple'

import {ADD_IMAGES} from '../../../actions/ProductAction'
import {connect} from 'react-redux'
import {createAction} from '../../../utils/SagaUtils'

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
    var files = this.uploader.state.files
    files.splice(index, 1)
    this.uploader.props.onChange(files)
    this.uploader.setState({files})
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
    if (this.state.files.length) {
      const params = {
        id: this.props.id,
        image_ids: this.state.files.map(i => i.data.id)
      }
      this.props.addImages(params)
        .then(() => this.props.nextStep())
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
            <p className="text-center">
              <br/>Upload images to train your product</p>
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
function mapStateToProps(state) {
  return {
    error: state.auth.error,
    images: state.wizard.images
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addImages: createAction(ADD_IMAGES, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Training);
