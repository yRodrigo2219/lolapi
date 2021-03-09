import { GAME } from './types';

export function loadRequest(gameId, date) {
  return {
    type: GAME.REQUEST,
    payload: {
      gameId,
      date,
    }
  }
}

export function loadSuccess(response) {
  return {
    type: GAME.SUCCESS,
    payload: response
  }
}

export function loadFailure() {
  return {
    type: GAME.FAILURE,
  }
}