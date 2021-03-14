import { put, takeLatest } from 'redux-saga/effects';

import { loadRequest as loadMatches } from '../leagues/actions';
import { successHome } from './actions';
import { PAGES } from './types';
import { SCHEDULE } from '../schedule/types';

function* reqHome() {
  yield put(loadMatches());
}

function* sucHome() {
  yield put(successHome());
}

export default function* pages() {
  yield takeLatest(PAGES.REQUEST_HOME, reqHome);
  yield takeLatest(SCHEDULE.SUCCESS, sucHome);
}