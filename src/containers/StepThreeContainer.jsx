import { connect } from 'react-redux';
import StepThree from '../components/StepThree';

function mapStateToProps (state) {
  return {
    inputs: state.inputs.filter(input => input.step === 3)
  }
}

const StepThreeContainer = connect(mapStateToProps)(StepThree);

export default StepThreeContainer;