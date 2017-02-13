import React, {Component} from 'react'
import {tagit, reversetagit, assignTags} from '../../../utils/ViewUtils'
import _ from 'lodash'

import {TRAIN_PRODUCT} from '../../../actions/ProductAction'
import {connect} from 'react-redux'
import {createAction} from '../../../utils/SagaUtils'

export class Concept extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concept: [],
      notConcept: [],
    }
  }

  componentDidMount() {
    console.log(this.props.product)

    const autocomplete = this.props.concepts.map(c => c.name)
    tagit('concept', autocomplete, this.onConceptChange.bind(this))
    reversetagit('not-concept', autocomplete, this.onNotConceptChange.bind(this))
  }

  onConceptChange() {
    const concept = assignTags('concept')
    this.setState({concept})
  }

  onNotConceptChange() {
    const notConcept = assignTags('not-concept')
    this.setState({notConcept})
  }

  validate() {
    if (!this.state.concept.length) {
      this.setState({error: 'Concept is required'})
    } else if (_.intersection(this.state.concept, this.state.notConcept).length > 0) {
      this.setState({error: 'Concept can not be the same as not-concept'})
    } else {
      this.props.trainProduct(this.conceptParams())
        .then(() => this.props.nextStep()
        )
    }
  }

  conceptParams() {
    console.log(this.props.product)
    return {
      data: {
        concepts: this.state.concept,
        not_concepts: this.state.notConcept,
      },
      id: this.props.product.id
    }
  }

  renderTags(concepts) {
    return concepts.map(concept => (<li key={concept.id}>{concept.name}</li>))
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Add concept</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Add concepts to improve the system's accurracy</p>
          </div>
        </div>
        <div className="sideblock col-md-offset-1 col-md-5">
          <h2 className="col-md-offset-1">Concepts</h2>
          <ul id="concept">
            {this.renderTags(this.props.product.concepts)}
          </ul>
          {this.state.error && <span className="has-error col-md-offset-1">{this.state.error}</span>}
        </div>
        <div className="sideblock col-md-5">
          <h2>Not concepts</h2>
          <ul id="not-concept">
            {this.renderTags(this.props.product.not_concepts)}
          </ul>
        </div>
        <div className="col-sm-11 col-md-11">
          <button
            className="btn btn-alt"
            onClick={this.props.previousStep}>
            Previous
          </button>
          <button className="btn btn-alt pull-right"
                  onClick={this.validate.bind(this)}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.data,
    concepts: state.configs.concepts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    trainProduct: createAction(TRAIN_PRODUCT, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Concept);
