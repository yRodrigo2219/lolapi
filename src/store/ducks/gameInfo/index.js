import { GAME } from './types';

const INITIAL_STATE = {
  activeGame: '',
  delay: 2,
  time: {
    initial: -1,
    now: 0,
  },
  metadata: {},
  data: {},
  loading: false,
  error: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.REQUEST:
      const activeGame = action.payload.gameId;
      const resetInitial = ((state.activeGame !== activeGame) ? -1 : state.time.initial);

      return {
        ...state,
        activeGame,
        time: {
          ...state.time,
          initial: resetInitial,
        },
        loading: true
      }
    case GAME.SUCCESS:
      const metadata = action.payload.gameMetadata;
      const frames = action.payload.frames;

      const data = frames[frames.length - 1];
      const gameDate = new Date(data.rfc460Timestamp).getTime();
      const now = (
        state.time.initial === -1 ? 0 : (gameDate - state.time.initial)
      );
      const initial = (
        state.time.initial === -1 ? gameDate : state.time.initial
      );

      console.log("Game time: " + now + "ms");

      return {
        ...state,
        time: {
          initial,
          now,
        },
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