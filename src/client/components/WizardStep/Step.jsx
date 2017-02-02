import React, {Component} from 'react'
require('./Step.scss')

export class Step extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentStep: nextProps.currentStep
    })
  }
//   onClick={() => {
//   this.setState({currentStep: 1});
//   this.props.onStepChange(1)
// }}
  render() {
    return (
      <ul className="steps">
        <li className={this.state.currentStep == 1 ? 'active' : null}
            data-title="Create"></li>
        <li data-title="Train"
            className={this.state.currentStep == 2 ? 'active' : null}></li>
        <li className={this.state.currentStep == 3 ? 'active' : null}
            data-title="Concept"></li>
        <li className={this.state.currentStep == 4 ? 'active' : null}
            data-title="Size"></li>
      </ul>
    )
  }
}
export default Step;
