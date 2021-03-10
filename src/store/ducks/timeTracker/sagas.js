import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getTime } from '../../../services/clock';
import { loadFailure, loadSuccess, updateTime } from './actions';
import { loadRequest } from '../gameInfo/actions';
import { selectActiveGame } from '../gameInfo/selects';
import { selectNow } from './selects';
import { TIME } from './types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* load() {
  try {
    const response = yield call(getTime);

    yield put(loadSuccess(response));
    yield put(updateTime());
  } catch (err) {
    yield put(loadFailure());
  }
}

function* update() {
  const unix = yield select(selectNow);
  const activeGame = yield select(selectActiveGame);

  const date = new Date(unix);
  const ms = date.getMilliseconds();
  const s = date.getSeconds() % 10 * 1000;
  const delay = 10000 - (s + ms);
  const isoDate = new Date(unix - s - ms).toISOString();

  yield put(loadRequest(activeGame, isoDate));

  yield call(promiseDelay, delay);

  yield put(updateTime());
}

export default function* timeTracker() {
  yield takeLatest(TIME.REQUEST, load);
  yield takeLatest(TIME.UPDATE, update);
}