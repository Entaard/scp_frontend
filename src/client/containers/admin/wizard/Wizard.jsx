import React, { Component } from 'react'

import Info from './Info'
import Training from './Training'
import Step from '../../../components/WizardStep/Step'
import Concept from './Concept'

export class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  renderStep(step) {
    if (step) {
      this.setState({step})
    }
    switch (this.state.step) {
      case 1:
        return <Info nextStep={this.nextStep}/>
      case 2:
        return <Training nextStep={this.nextStep}
                         previousStep={this.previousStep}/>
      case 3:
        return <Concept previousStep={this.previousStep}/>
    }
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    })
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {
    return (
      <div className="open-left">
        <div className="page-wrapper">
          <div className="page-main">
            <Step currentStep={this.state.step}
                  onStepChange={(step) => this.renderStep(step)}/>
            {this.renderStep()}
          </div>
        </div>
      </div>
    )
  }
}
export default Wizard;