import React, {Component} from 'react';

export class TrainedImage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-2">
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
