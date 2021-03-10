import { combineReducers } from 'redux';

import leagues from './leagues';
import schedule from './schedule';
import matchDetails from './matchDetails';
import gameInfo from './gameInfo';
import timeTracker from './timeTracker';

const rootReducer = combineReducers({
  leagues,
  schedule,
  matchDetails,
  gameInfo,
  timeTracker,
});

export default rootReducer;