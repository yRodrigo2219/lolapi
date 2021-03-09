import { call, put, takeLatest } from 'redux-saga/effects';

import { getEventDetails } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { MATCH } from './types';

function* load(action) {
  try {
    const response = yield call(getEventDetails, action.payload);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default function* match() {
  yield takeLatest(MATCH.REQUEST, load);
}