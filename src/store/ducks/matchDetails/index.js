import { MATCH } from './types';

const INITIAL_STATE = {
  id: '',
  teams: [],
  games: [],
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MATCH.REQUEST:
      return {
        ...state,
        loading: true
      }
    case MATCH.SUCCESS:
      const id = action.payload.id;
      const teams = action.payload.match.teams;
      const games = action.payload.match.games;

      return {
        ...state,
        id,
        teams,
        games,
        loading: false,
        error: false
      };
    case MATCH.FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}