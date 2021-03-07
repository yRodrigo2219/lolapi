import { SCHEDULE } from './types';

const INITIAL_STATE = {
  live: [],
  next: [],
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
      const newer = action.payload.pages.newer;
      const data = action.payload.events.filter(event => {
        return (event.type === 'match' && event.state !== 'completed');
      });
      const live = data.filter(event => {
        return (event.state === 'inProgress');
      })
      let next = data.filter(event => {
        return (event.state !== 'inProgress');
      });

      next = next.slice(0, 20);

      return {
        ...state,
        live,
        next,
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