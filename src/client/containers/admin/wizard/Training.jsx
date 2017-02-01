import React, {Component} from 'react'
import TrainedImage from '../../../components/admin/TrainedImage'
import Uploader from '../../../components/Uploader/Multiple'

export class Training extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: []
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  renderImages() {
    return this.uploader.state.files.map((data) => (
        <TrainedImage
          key={data.id}
          url={data.file.preview}
        />
      )
    )
  }

  renderTitle() {
    if (this.uploader.state.upload) {
      return `Uploading ${this.uploader.state.files.length} files...`
    } else {
      return `Upload complete`
    }
  }

  handleUpload(data) {
    this.setState({url: data})
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
                    onChange={this.handleUpload}
                    ref={(ref) => {
                      this.uploader = ref;
                    } }
                  />
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-11 col-lg-11">
          <h2 className="custom-color">{this.uploader && this.renderTitle()}</h2>
          {this.uploader && this.renderImages()}
        </div>

        <div className="col-sm-11 col-md-11">
          <button className="btn btn-alt"
                  onClick={this.props.previousStep}>Previous
          </button>
          <button className="btn btn-alt pull-right"
                  onClick={this.props.nextStep}>Next
          </button>
        </div>
      </div>
    )
  }
}
export default Training;
