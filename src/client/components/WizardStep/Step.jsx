import React, {Component} from 'react'
require('./Step.scss')

export class Step extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentStep: nextProps.currentStep
    })
  }

  renderSteps() {
    const currentIndex = this.indexOfCurrentStep()
    return this.props.steps.map((step, index) => {
      return <li key={index}
                 className={index == currentIndex && 'active'}
                 data-title={this.props.titles[index]}></li>
    })
  }

  indexOfCurrentStep() {
    const {steps, currentStep} = this.props;
    return steps.indexOf(currentStep)
  }

//   onClick={() => {
//   this.setState({currentStep: 1});
//   this.props.onStepChange(1)
// }}
  render() {
    return (
      <ul className="steps">
        {this.renderSteps()}
      </ul>
    )
  }
}
export default Step;
