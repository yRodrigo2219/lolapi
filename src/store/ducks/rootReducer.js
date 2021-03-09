import { combineReducers } from 'redux';

import leagues from './leagues';
import schedule from './schedule';
import matchDetails from './matchDetails';
import gameInfo from './gameInfo';

const rootReducer = combineReducers({
  leagues,
  schedule,
  matchDetails,
  gameInfo,
});

export default rootReducer;