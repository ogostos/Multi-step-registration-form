import React, { Component } from 'react';
import DataToInput from './DataToInput';
import { ButtonPreviousContainer, ButtonNextContainer } from '../containers/ButtonsContainer';

class StepThree extends Component {
  render () {
    const inputs = this.props.inputs.map(input => <DataToInput inputObject={input} key={input.name}/>)
    return (
      <React.Fragment>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Step 3 / 3</h3>
            <p>Please, fill in credit card info:</p>
          </div>
            <div className="form-top-right">
            <i className="fa fa-credit-card"></i>
          </div>
        </div>
        <div className="form-bottom">
          {inputs}
          <ButtonPreviousContainer />
          <ButtonNextContainer />
        </div>
      </React.Fragment>
    )
  }
}

export default StepThree;