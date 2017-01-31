import React, {Component} from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  // TODO: remove mocking
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      data: []
    }
    this.mockApi()
  }

  mockApi() {
    const MockAdapter = require('axios-mock-adapter')
    const mock = new MockAdapter(axios)
    mock.onPost('/images/').reply(200, {
      "id": 1,
      "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuN4HUbp-D3Go0ggqRKk4QGITERQtZ-tgXA7gmquB-jXCUehMm"
    })
  }

  onDrop(acceptedFiles) {
    this.setState({
      files: acceptedFiles.map(file => {
        return {
          file: file,
          upload: false
        }
      })
    })
    const self = this
    acceptedFiles.forEach((file, index) => {
      var data = new FormData();
      data.append('file', file);
      axios.post('/images/', data)
        .then(response => self.handleComplete(response, index))
    })
  }

  handleComplete(response, index) {
    var files = this.state.files
    files[index].upload = true
    this.setState(state => {
      state.files = files
      state.data = state.data.concat(response.data)
    }, () => {
      this.props.onChange(this.state.data)
    })
  }

  renderTitle() {
    if (this.state.upload) {
      return `Uploading ${this.state.files.length} files...`
    } else {
      return `Upload complete`
    }
  }

  render() {
    return (
      <div className="btn btn-default multi-uploader">
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <div>Browse</div>
        </Dropzone>
        {/*{this.state.files.length > 0 ? <div>*/}
          {/*<h5>{this.renderTitle()}</h5>*/}
          {/*<div>*/}
            {/*{this.state.files.map((data) => {*/}
              {/*return (*/}
                {/*<img*/}
                  {/*style={{opacity: data.upload ? '1' : '0.5'}}*/}
                  {/*src={data.file.preview}*/}
                {/*/>*/}
              {/*)*/}
            {/*})}*/}
          {/*</div>*/}
        {/*</div> : null}*/}
      </div>
    )
  }
}

export default Uploader;
