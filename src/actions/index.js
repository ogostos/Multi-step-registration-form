// constants
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const CHANGE_STEP = 'CHANGE_STEP';

// action creators
export function updateValue (name, value) {
  return { type: UPDATE_VALUE, name, value };
}
export function changeStep (step) {
  return { type: CHANGE_STEP, step };
}