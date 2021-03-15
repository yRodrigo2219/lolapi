import { call, put, takeLatest } from 'redux-saga/effects';

import { getLatestDDragonVersion } from '../../../services/riot';
import { successPatch, failurePatch, requestPatch } from './actions';
import { PATCH } from './types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* load() {
  try {
    const patchVersion = yield call(getLatestDDragonVersion);

    yield put(successPatch(patchVersion));
  } catch (err) {
    yield put(failurePatch());
  }
}

function* onError() {
  yield call(promiseDelay, 1000);

  yield put(requestPatch());
}

export default function* latestPatch() {
  yield takeLatest(PATCH.REQUEST, load);
  yield takeLatest(PATCH.FAILURE, onError);
}