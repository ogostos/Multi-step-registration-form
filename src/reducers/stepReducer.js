import { CHANGE_STEP } from '../actions';

function stepReducer (state = 1, action) {
  switch (action.type) {
    case CHANGE_STEP:
      return state + action.step;
    default:
      return state;
  }
}

export default stepReducer;