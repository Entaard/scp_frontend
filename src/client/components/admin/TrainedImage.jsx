import React, {Component} from 'react';

export class TrainedImage extends Component {
  render() {
    return (
      <div
        className="col-xs-6 col-sm-2"
        style={{opacity: this.props.upload ? '1' : '0.5'}}>
        <div className="category-block">
          <button onClick={this.props.onClick}
                  className="close">&times;</button>
          <div className="category-image">
            <img src={this.props.url}/>
          </div>
        </div>
      </div>
    )
  }
}
export default TrainedImage;
