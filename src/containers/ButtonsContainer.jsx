import { connect } from 'react-redux';
import ButtonPrevious from '../components/ButtonPrevious';
import ButtonNext from '../components/ButtonNext';
import { changeStep } from '../actions';

function mapStateToProps (state) {
  return {
    allRequired: state.inputs.filter(input => input.step === state.step && input.mandatory).every(input => input.value)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: step => dispatch(changeStep(step))
  }
}

export const ButtonPreviousContainer = connect(null, mapDispatchToProps)(ButtonPrevious);
export const ButtonNextContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonNext);
