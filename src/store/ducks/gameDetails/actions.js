import { DETAILS } from './types';

export function loadRequest(gameId, isoDate) {
  return {
    type: DETAILS.REQUEST,
    payload: {
      gameId,
      isoDate
    }
  }
}

export function loadSuccess(data) {
  return {
    type: DETAILS.SUCCESS,
    payload: data,
  }
}

export function loadFailure() {
  return {
    type: DETAILS.FAILURE,
  }
}