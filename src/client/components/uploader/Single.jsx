import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import Multiple from './Multiple'
require('./uploader.scss')

class Uploader extends Multiple {
  renderImage() {
    return this.state.files.map(data => (
        <div className="main-image">
          <img
            className="upload-main-image"
            key={data.id}
            style={{opacity: data.upload ? '1' : '0.5'}}
            src={data.file.preview}
          />
        </div>
      )
    )
  }

  renderDropzone() {
    return (
      <div className="zoom single-image-uploader">
        <Dropzone
          className="single-image-dropzone"
          multiple={false}
          onDrop={this.onDrop.bind(this)}
        />
      </div>
    )
  }

  renderPlaceholder() {
    return (
      <div className="main-image">
        <img
          className="upload-main-image"
          src="/images/products/large/product-gallery-1.jpg"
        />
      </div>
    )
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        {this.state.files.length == 0 ? this.renderPlaceholder() : this.renderImage()}
        {this.renderDropzone()}
      </div>
    )
  }
}

export default Uploader;
