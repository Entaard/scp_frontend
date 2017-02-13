import React, {Component} from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
  }

  componentWillMount() {
    if (this.props.initData) {
      this.setState({files: this.props.initData})
    }
  }

  handleDelete(index) {
    const files = this.state.files
    files[index].upload = false
    const self = this
    self.setState({files})
    self.props.onChange(files)
    axios.delete(`${this.props.prefix || ''}/images/${files[index].data.id}`)
      .then(() => {
        files.splice(index, 1)
        self.setState({files})
        self.props.onChange(files)
      })
  }

  onDrop(acceptedFiles) {
    const currentLength = this.state.files.length
    this.setState(state => {
      let files = state.files
      acceptedFiles.forEach(file => {
        files = files.concat({file: file, upload: false})
      })
      state.files = files
    }, () => {
      this.props.onChange(this.state.files)
    })

    const self = this
    acceptedFiles.forEach((file, index) => {
      var data = new FormData();
      data.append('file', file);
      axios.post(`${this.props.prefix || ''}/images`, data)
        .then(response => self.handleComplete(response, index + currentLength))
    })
  }

  handleComplete(response, index) {
    var files = this.state.files
    files[index].upload = true
    files[index].data = response.data
    this.setState(state => {
      state.files = files
    }, () => {
      this.props.onChange(this.state.files)
    })
  }

  render() {
    return (
      <div className="btn btn-default multi-uploader">
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <div>Browse</div>
        </Dropzone>
      </div>
    )
  }
}

export default Uploader;
