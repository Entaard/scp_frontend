import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createAction} from '../../../utils/SagaUtils'
import {initialize} from 'redux-form'

import {
  GET_ADMIN_PRODUCT_DETAIL,
} from '../../../actions/ProductAction'

import Info from './Info'
import Training from './Training'
import Step from '../../../components/WizardStep/Step'
import Concept from './Concept'
import Option from './Option'

let stateValues = {};

export class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ['', 'info', 'image', 'concept'],
      currentStatus: ''
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  componentDidMount() {
    const id = this.props.location.query.id
    if (id) {
      this.props.getProductDetail(id)
        .then(this.reloadForm.bind(this))
    }
  }

  indexOfCurrentStep() {
    const {status, currentStatus} = this.state;
    return status.indexOf(currentStatus)
  }

  reloadForm(response) {
    const product = response.data
    const {name, description, price, category_id, url} = product
    stateValues = {name, description, price, category_id, url}
    this.props.initializeForm(stateValues)
    this.setState({currentStatus: product.status})
  }

  renderStep() {
    const product = this.props.product.data
    switch (this.state.currentStatus) {
      case 'info':
        return <Training
          product={product}
          nextStep={this.nextStep}
          previousStep={this.previousStep}/>
      case 'image':
        return <Concept
          product={product}
          nextStep={this.nextStep}
          previousStep={this.previousStep}/>
      case 'concept':
        return <Option
          product={product}
          finish={this.nextStep}
          previousStep={this.previousStep}/>
      default:
        return <Info
          product={product}
          nextStep={this.nextStep}/>
    }
  }

  nextStep() {
    this.setState({
      currentStatus: this.state.status[this.indexOfCurrentStep() + 1]
    })
  }

  previousStep() {
    this.setState({
      currentStatus: this.state.status[this.indexOfCurrentStep() - 1]
    })
  }

  render() {
    if (this.props.product.loading && this.props.location.query.id) {
      return <div>Loading...</div>
    }
    return (
      <div className="open-left">
        <div className="page-wrapper">
          <div className="page-main">
            {/*<Step currentStep={this.state.step}*/}
            {/*onStepChange={(step) => this.renderStep(step)}/>*/}
            <Step currentStep={this.state.currentStatus}
                  titles={['Info', 'Image', 'Concept', 'Option']}
                  steps={this.state.status}/>
            {this.renderStep()}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  product: state.productDetail
})

const mapDispatchToProps = (dispatch) => ({
  getProductDetail: createAction(GET_ADMIN_PRODUCT_DETAIL, dispatch),
  initializeForm: (stateValues) => {
    dispatch(initialize('info', stateValues))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
