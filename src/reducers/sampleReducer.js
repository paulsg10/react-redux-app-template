import * as types from '../constants/actionTypes';

const initialState = {
  sample: '',
};

export default function (previousState = initialState, action) {
  let stateCopy;

  switch (action.type) {
    case types.ACTION_TYPE: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.sample = action.payload;
      return stateCopy;
    }
    default:
      return previousState;
  }
}
