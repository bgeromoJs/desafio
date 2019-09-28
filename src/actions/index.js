import { LOGIN, REP, FOLLOWERS, STARRED } from './actionTypes';

export const loginRequest = username => ({
  type: LOGIN,
  payload: username
});

export const repRequest = rep => ({
  type: REP,
  payload: rep
})

export const followersRequest = followers => ({
  type: FOLLOWERS,
  payload: followers
})

export const starredRequest = starred => ({
  type: STARRED,
  payload: starred
})