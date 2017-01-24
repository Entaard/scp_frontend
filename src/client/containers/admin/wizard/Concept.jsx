import React, { Component } from 'react'
import { tagit } from '../../../utils/ViewUtils'

export class Concept extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    tagit('singleFieldTags', ['a', 'b', 'c'])
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Add concept</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Add concepts
              <br/>to improve the system's accurracy</p>
          </div>
        </div>
        <ul id="singleFieldTags"></ul>
        <div className="col-sm-11 col-md-11">
          <button
            className="btn btn-alt"
            onClick={this.props.previousStep}>
            Previous
          </button>
          <button className="btn btn-alt pull-right">
            Finish
          </button>
        </div>
      </div>
    )
  }
}
export default Concept;



