import { connect } from 'react-redux';
import StepTwo from '../components/StepTwo';

function mapStateToProps (state) {
  return {
    inputs: state.inputs.filter(input => input.step === 2)
  }
}

const StepTwoContainer = connect(mapStateToProps)(StepTwo);

export default StepTwoContainer;