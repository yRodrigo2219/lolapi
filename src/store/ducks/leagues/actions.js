import { LEAGUE } from './types';

export function loadRequest() {
  return {
    type: LEAGUE.REQUEST,
  }
}

export function loadSuccess(response) {
  return {
    type: LEAGUE.SUCCESS,
    payload: response
  }
}

export function loadFailure() {
  return {
    type: LEAGUE.FAILURE,
  }
}