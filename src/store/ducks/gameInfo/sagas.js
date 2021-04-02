import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getGameStats, getInitialGameStats } from '../../../services/api';
import {
  initGameRequest,
  initGameSuccess,
  initGameFailure,
  changeGame,
  changeGameSuccess,
  updateGameSuccess,
  updateGameFailure,
} from './actions';
import { selectNextGameId } from '../matchDetails/selects';
import { GAME } from './types';
import { MATCH } from '../matchDetails/types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* loadInit({ payload }) {
  try {
    const response = yield call(getInitialGameStats, payload);

    yield put(initGameSuccess(response));
  } catch (err) {
    yield put(initGameFailure(payload));
  }
}

function* loadUpdate({ payload }) {
  try {
    const response = yield call(getGameStats, payload.gameId, payload.isoDate);

    yield put(updateGameSuccess(response));
  } catch (err) {
    yield put(updateGameFailure());
  }
}

function* initializeGame() {
  const nextGameId = yield select(selectNextGameId);

  yield put(changeGame(nextGameId));
}

function* loadChange({ payload }) {
  yield put(initGameFailure(''));
  if (payload)
    yield put(initGameRequest(payload));

  yield put(changeGameSuccess(payload));
}

function* onInitError({ payload }) {
  if (payload) {
    yield call(promiseDelay, 15000); // wait for cache exp. 15s

    yield put(initGameRequest(payload)); // try again
  }
}

export default function* match() {
  yield takeLatest(GAME.CHANGE_GAME_REQUEST, loadChange)
  yield takeLatest(MATCH.SUCCESS, initializeGame);
  yield takeLatest(GAME.INIT_FAILURE, onInitError);
  yield takeLatest(GAME.INIT_REQUEST, loadInit);
  yield takeLatest(GAME.UPDATE_REQUEST, loadUpdate);
}