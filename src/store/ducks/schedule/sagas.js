import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getSchedule } from '../../../services/api';
import { loadSuccess, loadFailure, loadRequest } from './actions';
import { leagueFilter } from '../leagues/selects';
import { SCHEDULE } from './types';
import { LEAGUE } from '../leagues/types';

function* load(action) {
  try {
    const filter = action.payload;
    const response = yield call(getSchedule, filter);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* updateSchedule() {
  const filter = yield select(leagueFilter);

  yield put(loadRequest(filter));
}

export default function* schedule() {
  yield takeLatest(LEAGUE.SUCCESS, updateSchedule);
  yield takeLatest(SCHEDULE.REQUEST, load);
}