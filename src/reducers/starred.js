import { STARRED } from '../actions/actionTypes';

const initialState = {
  starreds: []
};

export function starreds(state = initialState, action) {
  switch(action.type) {
    case STARRED:
      return {...state, starreds: action.payload};
    default:
      return state;
  }
}