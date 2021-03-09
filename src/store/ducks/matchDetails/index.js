import { MATCH } from './types';

const INITIAL_STATE = {
  id: '',
  nextGameId: '',
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

      const playableGames = games.filter(game => (
        game.state !== 'unneeded'
      ));

      const nextGame = playableGames.find(game => (
        game.state !== 'completed'
      ));

      const nextGameId = (
        nextGame ? nextGame.id : playableGames[playableGames.length - 1].id
      )

      return {
        ...state,
        id,
        teams,
        nextGameId,
        games: playableGames,
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