import { call, put, takeLatest, select } from 'redux-saga/effects';

import { getSchedule } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { LEAGUE } from '../leagues/types';

const leagueFilter = state => state.leagues.filter;

function* load() {
  try {
    const params = yield select(leagueFilter);
    const response = yield call(getSchedule, params);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default function* schedule() {
  yield takeLatest(LEAGUE.SUCCESS, load);
}