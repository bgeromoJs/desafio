import { userLogged } from './userLogged';
import { repositories } from './repositories';
import { followers } from './followers';
import { starreds } from './starred';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  rep: repositories,
  user: userLogged,
  follow: followers,
  starred: starreds
});