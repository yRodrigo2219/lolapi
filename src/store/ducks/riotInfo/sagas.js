import { call, put, takeLatest } from 'redux-saga/effects';

import { getLatestDDragonVersion, getRunesInfo } from '../../../services/riot';
import {
  successPatch, failurePatch, requestPatch,
  successRunes, failureRunes, requestRunes
} from './actions';
import { RIOT } from './types';

const promiseDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

function* loadPatch() {
  try {
    const patchVersion = yield call(getLatestDDragonVersion);

    yield put(successPatch(patchVersion));
  } catch (err) {
    yield put(failurePatch());
  }
}

function* loadRunes({ payload }) {
  try {
    const response = yield call(getRunesInfo, payload);

    yield put(successRunes(response));
  } catch (err) {
    yield put(failureRunes(payload));
  }
}

function* initRunes({ payload }) {
  yield put(requestRunes(payload));
}

function* onPatchError() {
  yield call(promiseDelay, 1000);

  yield put(requestPatch());
}

function* onRunesError({ payload }) {
  yield call(promiseDelay, 1000);

  yield put(requestRunes(payload));
}

export default function* latestPatch() {
  yield takeLatest(RIOT.PATCH_REQUEST, loadPatch);
  yield takeLatest(RIOT.PATCH_FAILURE, onPatchError);
  yield takeLatest(RIOT.PATCH_SUCCESS, initRunes);
  yield takeLatest(RIOT.RUNES_REQUEST, loadRunes);
  yield takeLatest(RIOT.RUNES_FAILURE, onRunesError);
}