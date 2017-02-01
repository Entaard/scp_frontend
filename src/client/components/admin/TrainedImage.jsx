import React, {Component} from 'react';

export class TrainedImage extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="col-xs-6 col-sm-2"
        style={{opacity: this.props.upload ? '1' : '0.5'}}>
        <div className="category-block">
          <div className="category-image">
            <img src={this.props.url}/>
          </div>
        </div>
      </div>
    )
  }
}
export default TrainedImage;
