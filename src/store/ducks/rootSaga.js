import { all } from 'redux-saga/effects';

import leagues from './leagues/saga';
import schedule from './schedule/saga';

export default function* rootSaga() {
  yield all([
    leagues(),
    schedule(),
  ]);
}