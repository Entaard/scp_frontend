import React, {Component} from 'react'
import { Link } from 'react-router'

export class NotFound extends Component {
  render() {
    return (
        <div className="page-main">
          <div className="block fullwidth fullheight page_404">
            <div className="container">
              <div className="image-404">
                <img src="images/404.png"
                     alt=""/>
                <div className="text-404">The page cannot be found</div>
              </div>
              <div><Link to="/"
                      className="btn">Return Back</Link></div>
            </div>
          </div>
        </div>
    )
  }
}

export default NotFound;
