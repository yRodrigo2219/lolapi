import { GAME } from './types';

const INITIAL_STATE = {
  activeGame: '',
  delay: 2,
  metadata: {},
  data: {},
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.REQUEST:
      return {
        ...state,
        loading: true
      }
    case GAME.SUCCESS:
      const activeGame = action.payload.esportsGameId;
      const metadata = action.payload.gameMetadata;
      const frames = action.payload.frames;

      const data = frames[frames.length - 1];

      return {
        ...state,
        activeGame,
        metadata,
        data,
        loading: false,
        error: false
      };
    case GAME.FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}