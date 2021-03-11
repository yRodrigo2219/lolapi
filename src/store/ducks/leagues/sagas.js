import { call, put, takeLatest } from 'redux-saga/effects';

import { getLeagues } from '../../../services/api';
import { loadSuccess, loadFailure, loadRequest } from './actions';
import { LEAGUE } from './types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* load() {
  try {
    const response = yield call(getLeagues);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* onError() {
  yield call(promiseDelay, 1000);

  yield put(loadRequest());
}

export default function* leagues() {
  yield takeLatest(LEAGUE.REQUEST, load);
  yield takeLatest(LEAGUE.FAILURE, onError);
}