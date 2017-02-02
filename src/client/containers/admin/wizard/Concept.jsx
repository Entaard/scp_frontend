import React, {Component} from 'react'
import {tagit, reversetagit, assignTags} from '../../../utils/ViewUtils'

export class Concept extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concept: [],
      notConcept: [],
    }
  }

  componentDidMount() {
    tagit('concept', ['c++', 'cccc', 'c1', 'c2', 'ruby', 'python'], this.onConceptChange.bind(this))
    reversetagit('not-concept', ['a', 'b', 'c'], this.onNotConceptChange.bind(this))
  }

  onConceptChange() {
    this.setState({concept: assignTags('concept')}, () => {
      console.log('concept after added', this.state.concept)
    })
  }

  onNotConceptChange() {
    this.setState({notConcept: assignTags('not-concept')}, () => {
      console.log('not-concept after added', this.state.notConcept)
    })
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
        <div className="sideblock col-md-offset-1 col-md-5">
          <h2 className="col-md-offset-1">Concepts</h2>
          <ul id="concept"></ul>
        </div>
        <div className="sideblock col-md-5">
          <h2>Not concepts</h2>
          <ul id="not-concept"></ul>
        </div>
        <div className="col-sm-11 col-md-11">
          <button
            className="btn btn-alt"
            onClick={this.props.previousStep}>
            Previous
          </button>
          <button className="btn btn-alt pull-right"
                  onClick={this.props.nextStep}>
            Next
          </button>
        </div>
      </div>
    )
  }
}
export default Concept;



