import { all } from 'redux-saga/effects';

import leagues from './leagues/sagas';
import schedule from './schedule/sagas';
import matchDetails from './matchDetails/sagas';
import gameInfo from './gameInfo/sagas';
import timeTracker from './timeTracker/sagas';

export default function* rootSaga() {
  yield all([
    leagues(),
    schedule(),
    matchDetails(),
    gameInfo(),
    timeTracker(),
  ]);
}