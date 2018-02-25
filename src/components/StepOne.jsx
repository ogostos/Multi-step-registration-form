import React, { Component } from 'react';
import DataToInput from './DataToInput';
import { ButtonNextContainer } from '../containers/ButtonsContainer';

class StepOne extends Component {
  render () {
    const inputs = this.props.inputs.map(input => <DataToInput inputObject={input} key={input.name}/>)
    return (
      <React.Fragment>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Step 1 / 3</h3>
            <p>Tell us about yourself:</p>
          </div>
            <div className="form-top-right">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <div className="form-bottom">
          {inputs}
          <ButtonNextContainer />
        </div>
      </React.Fragment>
    )
  }
}

export default StepOne;