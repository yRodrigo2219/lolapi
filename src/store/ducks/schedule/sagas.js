import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getSchedule } from '../../../services/api';
import { loadSuccess, loadFailure, loadRequest } from './actions';
import { leagueFilter } from '../leagues/selects';
import { SCHEDULE } from './types';
import { LEAGUE } from '../leagues/types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* load({ payload }) {
  try {
    const response = yield call(getSchedule, payload);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure(payload));
  }
}

function* onError({ payload }) {
  yield call(promiseDelay, 1000);

  yield put(loadRequest(payload));
}

function* updateSchedule() {
  const filter = yield select(leagueFilter);

  yield put(loadRequest(filter));
}

export default function* schedule() {
  yield takeLatest(LEAGUE.SUCCESS, updateSchedule);
  yield takeLatest(SCHEDULE.REQUEST, load);
  yield takeLatest(SCHEDULE.FAILURE, onError);
}