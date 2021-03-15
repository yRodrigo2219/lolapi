import { combineReducers } from 'redux';

import leagues from './leagues';
import schedule from './schedule';
import matchDetails from './matchDetails';
import gameInfo from './gameInfo';
import timeTracker from './timeTracker';
import pages from './pages';
import latestPatch from './latestPatch';

const rootReducer = combineReducers({
  leagues,
  schedule,
  matchDetails,
  gameInfo,
  timeTracker,
  pages,
  latestPatch,
});

export default rootReducer;