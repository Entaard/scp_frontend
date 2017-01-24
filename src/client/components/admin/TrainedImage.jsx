import React, {Component} from 'react';

export class TrainedImage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-2">
        <a href="#"
           className="category-block">
          <div className="category-image">
            <img src="/images/category/category-img-01.jpg"
                 alt="#"/>
          </div>
        </a>
      </div>
    )
  }
}
export default TrainedImage;
