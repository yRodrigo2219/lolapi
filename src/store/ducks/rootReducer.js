import { combineReducers } from 'redux';

import leagues from './leagues';
import schedule from './schedule';

const rootReducer = combineReducers({
  leagues,
  schedule,
});

export default rootReducer;