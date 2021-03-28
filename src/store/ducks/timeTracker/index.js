import { TIME } from './types';

const INITIAL_STATE = {
  unix: 0,
  now: 0,
  initialUnix: 0,
  delay: 5.5,
  didDelayChange: false,
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TIME.UPDATE:
      const now =
        state.unix + (Date.now() - state.initialUnix) - (state.delay * 10000);

      return {
        ...state,
        now,
      }
    case TIME.REQUEST:
      return {
        ...state,
        loading: true
      }
    case TIME.SUCCESS:
      const initialUnix = Date.now();
      const ms = new Date(action.payload.datetime).getMilliseconds();
      const unix = action.payload.unixtime * 1000 + ms;

      return {
        ...state,
        unix,
        initialUnix,
        loading: false,
        error: false
      };
    case TIME.FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    case TIME.SET_DELAY:
      let delay = Number.parseFloat(action.payload);

      if (delay < 2 || Number.isNaN(delay))
        delay = 2.0;

      if (delay >= 100)
        delay = 99.9;

      if (delay % Number.parseInt(delay) !== 0)
        delay = delay.toFixed(1);

      return {
        ...state,
        delay,
        didDelayChange: (delay !== state.delay),
      }
    default:
      return state;
  }
}