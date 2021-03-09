import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getGameStats } from '../../../services/api';
import { loadSuccess, loadFailure, loadRequest } from './actions';
import { selectNextGameId } from '../matchDetails/selects';
import { GAME } from './types';
import { MATCH } from '../matchDetails/types';

function* load(action) {
  try {
    const payload = action.payload;
    const response = yield call(getGameStats, payload.gameId, payload.date);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* updateGame() {
  const nextGameId = yield select(selectNextGameId);

  yield put(loadRequest(nextGameId));
}

export default function* match() {
  yield takeLatest(MATCH.SUCCESS, updateGame);
  yield takeLatest(GAME.REQUEST, load);
}