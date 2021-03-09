import { combineReducers } from 'redux';

import leagues from './leagues';
import schedule from './schedule';
import matchDetails from './matchDetails';

const rootReducer = combineReducers({
  leagues,
  schedule,
  matchDetails,
});

export default rootReducer;