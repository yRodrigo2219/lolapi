import { types } from './types';

export function loadRequest() {
  return {
    type: types.LEAGUE_REQUEST,
  }
}

export function loadSuccess(response) {
  return {
    type: types.LEAGUE_SUCCESS,
    payload: response
  }
}

export function loadFailure() {
  return {
    type: types.LEAGUE_FAILURE,
  }
}