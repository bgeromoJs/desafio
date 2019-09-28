import { FOLLOWERS } from '../actions/actionTypes';

const initialState = {
  followers: []
};

export function followers(state = initialState, action) {
  switch(action.type) {
    case FOLLOWERS:
      return {...state, followers: action.payload};
    default:
      return state;
  }
}