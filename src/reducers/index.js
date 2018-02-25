import { combineReducers } from 'redux';
import inputs from './inputsReducer';
import step from './stepReducer';

const reducers = combineReducers ({
  inputs, // inputs: inputs => reducer related to state.inputs
  step
})

export default reducers;