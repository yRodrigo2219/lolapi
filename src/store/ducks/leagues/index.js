import { types } from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LEAGUE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.LEAGUE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case types.LEAGUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}