import { SCHEDULE } from './types';

const INITIAL_STATE = {
  data: [],
  newer: '',
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCHEDULE.REQUEST:
      return {
        ...state,
        loading: true
      }
    case SCHEDULE.SUCCESS:
      let newer = action.payload.pages.newer;
      let data = action.payload.events.filter(event => {
        return (event.type === 'match' && event.state !== 'completed');
      });
      data = data.slice(0, 20);

      return {
        ...state,
        data,
        newer,
        loading: false,
        error: false
      };
    case SCHEDULE.FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}