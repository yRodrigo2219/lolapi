import { combineReducers } from 'redux';

import leagues from './leagues';
import schedule from './schedule';
import matchDetails from './matchDetails';
import gameInfo from './gameInfo';
import timeTracker from './timeTracker';
import pages from './pages';
import riotInfo from './riotInfo';
import gameDetails from './gameDetails';
import events from './events';

const rootReducer = combineReducers({
  leagues,
  schedule,
  matchDetails,
  gameInfo,
  timeTracker,
  pages,
  riotInfo,
  gameDetails,
  events,
});

export default rootReducer;