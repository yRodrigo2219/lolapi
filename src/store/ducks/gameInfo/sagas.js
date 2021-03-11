import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getGameStats, getInitialGameStats } from '../../../services/api';
import {
  initGameRequest,
  initGameSuccess,
  initGameFailure,
  updateGameSuccess,
  updateGameFailure,
} from './actions';
import { selectNextGameId } from '../matchDetails/selects';
import { GAME } from './types';
import { MATCH } from '../matchDetails/types';

function* loadInit({ payload }) {
  try {
    const response = yield call(getInitialGameStats, payload);

    yield put(initGameSuccess(response));
  } catch (err) {
    yield put(initGameFailure());
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

  yield put(initGameRequest(nextGameId));
}

function* loadChange({ payload }) {
  yield put(initGameRequest(payload));
}

export default function* match() {
  //yield takeLatest(GAME.CHANGE_GAME, loadChange)
  yield takeLatest(MATCH.SUCCESS, initializeGame);
  yield takeLatest(GAME.INIT_REQUEST, loadInit);
  yield takeLatest(GAME.UPDATE_REQUEST, loadUpdate);
}