import React, { Component } from 'react';
import StepOneContainer from '../containers/StepOneContainer';
import StepTwoContainer from '../containers/StepTwoContainer';
import StepThreeContainer from '../containers/StepThreeContainer';
import FinalStep from './FinalStep';

class InsideFrom extends Component {
  render () {
    let stepsInputs = '';
    const { step } = this.props

    switch (step) {
      case 2: stepsInputs = <StepTwoContainer />;
        break;
      case 3: stepsInputs = <StepThreeContainer />;
        break;
      case 4: stepsInputs = <FinalStep />;
        break;
      case 1:
      default: stepsInputs = <StepOneContainer />;
    }

    return (
      <form onChange={(event) => {this.props.onChange(event.target.name, event.target.value)}}
      action="" method="post" className="registration-form">
        {stepsInputs}
      </form>
    )
  }
}
export default InsideFrom;