import { GAME } from './types';

export function initGameRequest(gameId) {
  return {
    type: GAME.INIT_REQUEST,
    payload: gameId,
  }
}

export function initGameSuccess(data) {
  return {
    type: GAME.INIT_SUCCESS,
    payload: data,
  }
}

export function initGameFailure(gameId) {
  return {
    type: GAME.INIT_FAILURE,
    payload: gameId,
  }
}


export function updateGameRequest(gameId, isoDate) {
  return {
    type: GAME.UPDATE_REQUEST,
    payload: {
      gameId,
      isoDate
    }
  }
}

export function updateGameSuccess(data) {
  return {
    type: GAME.UPDATE_SUCCESS,
    payload: data,
  }
}

export function updateGameFailure() {
  return {
    type: GAME.UPDATE_FAILURE,
  }
}

export function changeGame(gameId) {
  return {
    type: GAME.CHANGE_GAME_REQUEST,
    payload: gameId,
  }
}

export function changeGameSuccess(gameId) {
  return {
    type: GAME.CHANGE_GAME_SUCCESS,
    payload: gameId,
  }
}