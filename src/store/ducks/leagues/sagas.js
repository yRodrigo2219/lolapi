import { call, put, takeLatest } from 'redux-saga/effects';

import { getLeagues } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { LEAGUE } from './types';

function* load() {
  try {
    const response = yield call(getLeagues);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default function* leagues() {
  yield takeLatest(LEAGUE.REQUEST, load);
}