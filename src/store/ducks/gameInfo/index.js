import { GAME } from './types';

const INITIAL_STATE = {
  activeGame: '',
  gameToUpdate: '',
  gameState: '',
  requestDate: 0,
  requestPing: 0,
  time: {
    initial: 0,
    now: 0,
  },
  metadata: {},
  data: {},
  loading: true,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.INIT_REQUEST:
      return {
        ...state,
        requestDate: Date.now(),
        loading: true,
      }
    case GAME.INIT_SUCCESS: {
      const metadata = action.payload.gameMetadata;
      const frames = action.payload.frames;
      const data = frames[frames.length - 1];

      const gameDate = new Date(data.rfc460Timestamp).getTime();

      return {
        ...state,
        gameToUpdate: action.payload.esportsGameId,
        gameState: data.gameState,
        requestPing: Date.now() - state.requestDate,
        time: {
          ...state.time,
          initial: gameDate,
        },
        metadata,
        data,
        loading: false,
        error: false
      };
    }
    case GAME.UPDATE_SUCCESS: {
      // TODO: Check if its updating the correct game
      const metadata = action.payload.gameMetadata;
      const dataFrames = action.payload.frames;
      const data = dataFrames[dataFrames.length - 1];

      const gameDate = new Date(data.rfc460Timestamp).getTime();

      return {
        ...state,
        gameState: data.gameState,
        gameToUpdate: data.gameState === 'finished' ? '' : state.gameToUpdate,
        requestPing: Date.now() - state.requestDate,
        time: {
          ...state.time,
          initial: (state.time.initial === 0 ? gameDate : state.time.initial),
          now: (state.time.initial === 0 ? 0 : (gameDate - state.time.initial)),
        },
        metadata,
        data,
        loading: false,
        error: false
      };
    }
    case GAME.INIT_FAILURE:
      return {
        ...state,
        gameState: 'unstarted',
        time: {
          ...state.time,
          initial: 0,
          now: 0,
        },
        error: true
      }
    case GAME.UPDATE_FAILURE: {
      const didGameStart = state.gameState !== 'unstarted';

      return {
        ...state,
        gameState: didGameStart ? 'error' : state.gameState,
        requestPing: didGameStart ? 9999 : 0,
        error: true
      }
    }
    case GAME.UPDATE_REQUEST:
      return {
        ...state,
        requestDate: Date.now(),
      }
    case GAME.CHANGE_GAME_REQUEST:
      return {
        ...state,
        gameToUpdate: action.payload === '' ? '' : state.gameToUpdate,
      }
    case GAME.CHANGE_GAME_SUCCESS:
      const activeGame = action.payload;

      return {
        ...state,
        activeGame,
      }
    default:
      return state;
  }
}