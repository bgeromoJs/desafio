import { REP } from '../actions/actionTypes';

const initialState = {
  repositories: []
};

export function repositories(state = initialState, action) {
  switch(action.type) {
    case REP:
      return {...state, repositories: action.payload};
    default:
      return state;
  }
}