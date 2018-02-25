import { connect } from 'react-redux';
import StepOne from '../components/StepOne';

function mapStateToProps (state) {
  return {
    inputs: state.inputs.filter(input => input.step === 1)
  }
}

const StepOneContainer = connect(mapStateToProps)(StepOne);

export default StepOneContainer;