import { connect } from 'react-redux';
import Form from '../components/Form';
import { changeStep, updateValue } from '../actions';

function mapStateToProps (state) {
  return {
    step: state.step
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: step => dispatch(changeStep(step)),
    onChange: (name, value) => dispatch(updateValue(name, value))
  }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;