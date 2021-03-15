import { call, put, takeLatest } from 'redux-saga/effects';

import { getChampStats } from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { GAME } from '../gameInfo/types';


function* updateDetails({ payload }) {
  try {
    const response = yield call(getChampStats, payload.gameId, payload.isoDate);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default function* gameDetails() {
  yield takeLatest(GAME.UPDATE_REQUEST, updateDetails);
}