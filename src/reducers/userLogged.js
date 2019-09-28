import { LOGIN } from '../actions/actionTypes';

const initialState = {
  userLogged: 'octocat'
};

export function userLogged(state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, userLogged: action.payload};
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}