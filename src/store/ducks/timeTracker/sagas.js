import { call, put, takeLatest, select, take } from 'redux-saga/effects';

import { getTime } from '../../../services/clock';
import { loadFailure, loadSuccess, updateTime, loadRequest } from './actions';
import { updateGameRequest } from '../gameInfo/actions';
import { selectGameToUpdate } from '../gameInfo/selects';
import { selectNow, selectDidDelayChange } from './selects';
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

function* onClockLoad() {
  yield take(GAME.INIT_SUCCESS);

  yield put(updateTime());
}

function* update() {
  const unix = yield select(selectNow);
  const updateGame = yield select(selectGameToUpdate);

  const date = new Date(unix);
  const ms = date.getMilliseconds();
  const s = date.getSeconds() % 10 * 1000;
  const delay = 10000 - (s + ms);
  const isoDate = new Date(unix - s - ms).toISOString();

  if (updateGame !== '')
    yield put(updateGameRequest(updateGame, isoDate));

  yield call(promiseDelay, delay);

  yield put(updateTime());
}

function* onDelayUpdate() {
  const didDelayChange = yield select(selectDidDelayChange);

  if (didDelayChange) // if delay has changed
    yield put(updateTime());
}

export default function* timeTracker() {
  yield takeLatest(TIME.REQUEST, load);
  yield takeLatest(TIME.SUCCESS, onClockLoad);
  yield takeLatest(TIME.FAILURE, onError);
  yield takeLatest(TIME.UPDATE, update);
  yield takeLatest(TIME.SET_DELAY, onDelayUpdate);
}