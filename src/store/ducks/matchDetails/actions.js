import { MATCH } from './types';

export function loadRequest(matchId) {
  return {
    type: MATCH.REQUEST,
    payload: matchId
  }
}

export function loadSuccess(response) {
  return {
    type: MATCH.SUCCESS,
    payload: response
  }
}

export function loadFailure() {
  return {
    type: MATCH.FAILURE,
  }
}