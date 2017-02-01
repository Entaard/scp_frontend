import React, {Component} from 'react'
import Uploader from '../../../components/Uploader/Single'
import InfoForm from '../../../components/admin/wizard/InfoForm'
export class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(data) {
    this.setState({url: data[0].url})
  }

  handleSubmit = (values) => {
    console.log(values);
    this.props.nextStep();
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Create product</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">
              <br/>Add basic information for the product here</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-md-offset-1 col-lg-4">
            <Uploader onChange={this.handleUpload}/>
          </div>
          <div className="col-md-5 col-lg-6">
            <InfoForm imgUrl={this.state.url} onSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Info;
