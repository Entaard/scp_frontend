import React, {Component} from 'react'
import { browserHistory } from 'react-router'

export class NotFound extends Component {
  render() {
    return (
        <div className="page-main">
          <div className="block fullwidth fullheight page_404">
            <div className="container">
              <div className="image-404">
                <img src="/images/404.png"
                     alt=""/>
                <div className="text-404">The page cannot be found</div>
              </div>
              <div><a onClick={browserHistory.goBack}
                      className="btn">Return Back</a></div>
            </div>
          </div>
        </div>
    )
  }
}

export default NotFound;
