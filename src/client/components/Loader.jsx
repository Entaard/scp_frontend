import React, {Component} from 'react'

export class Loader extends Component {
  render() {
    return (
      <div id="loader-wrapper">
        <div className="cube-wrapper">
          <div className="cube-folding">
            <span className="leaf1"></span>
            <span className="leaf2"></span>
            <span className="leaf3"></span>
            <span className="leaf4"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default  Loader;