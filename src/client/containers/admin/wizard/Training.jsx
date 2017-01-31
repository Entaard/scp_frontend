import React, {Component} from 'react'
import TrainedImage from '../../../components/admin/TrainedImage'

let items = []
for (let i = 0; i < 15; i++) {
  items.push({id: i, image: '', name: `image ${i}`});
}
export class Training extends Component {

  renderImages() {
    return (
      items.map((item, index) => (
        <TrainedImage
          key={item.id}
          name={item.name}
        />
      ))
    )
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
													<button className="btn btn-default"
                                  type="submit">Browse</button>
													</span>
              </div>
            </form>
          </div>
        </div>
        {/*<div className="col-md-11 col-lg-11">*/}
          {/*<h2 className="custom-color">Uploaded images </h2>*/}
          {/*{this.renderImages()}*/}
        {/*</div>*/}

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
