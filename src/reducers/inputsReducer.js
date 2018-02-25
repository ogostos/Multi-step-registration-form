import { UPDATE_VALUE } from '../actions';

function inputsReducer (state = [], action) {
  switch (action.type) {
    case UPDATE_VALUE:
      return state.map((input) => {
        if (action.name && input.name === action.name) {
          return {...input, value: action.value};
        }
        return input;
      });
    default:
      return state;
  }
}

export default inputsReducer;