import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getTime } from '../../../services/clock';
import { loadFailure, loadSuccess, updateTime, loadRequest } from './actions';
import { updateGameRequest } from '../gameInfo/actions';
import { selectActiveGame } from '../gameInfo/selects';
import { selectNow } from './selects';
import { TIME } from './types';
import { GAME } from '../gameInfo/types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* load() {
  try {
    const response = yield call(getTime);

    yield put(loadSuccess(response));
    yield put(updateTime());
  } catch (err) {
    console.warn('loadClock error');
    yield put(loadFailure());
  }
}

function* onError() {
  yield call(promiseDelay, 1000);

  yield put(loadRequest());
}

function* update() {
  const unix = yield select(selectNow);
  const activeGame = yield select(selectActiveGame);

  const date = new Date(unix);
  const ms = date.getMilliseconds();
  const s = date.getSeconds() % 10 * 1000;
  const delay = 10000 - (s + ms);
  const isoDate = new Date(unix - s - ms).toISOString();

  if (activeGame !== '')
    yield put(updateGameRequest(activeGame, isoDate));

  yield call(promiseDelay, delay);

  yield put(updateTime());
}

export default function* timeTracker() {
  yield takeLatest(TIME.REQUEST, load);
  yield takeLatest(GAME.INIT_SUCCESS, update);
  yield takeLatest(TIME.UPDATE, update);
  yield takeLatest(TIME.FAILURE, onError);
}