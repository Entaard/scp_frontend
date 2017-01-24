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

  render() {
    return (
      <ul className="steps">
        <li className={this.state.currentStep == 1 ? 'active' : null}
            onClick={() => {
              this.setState({currentStep: 1});
              this.props.onStepChange(1)
            }}
            data-title="Create"></li>
        <li data-title="Train"
            onClick={() => {
              this.setState({currentStep: 2});
              this.props.onStepChange(2)
            }}
            className={this.state.currentStep == 2 ? 'active' : null}></li>
        <li onClick={() => {
          this.setState({currentStep: 3});
          this.props.onStepChange(3)
        }}
            className={this.state.currentStep == 3 ? 'active' : null}
            data-title="Concept"></li>
      </ul>
    )
  }
}
export default Step;
