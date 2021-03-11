import { GAME } from './types';

const INITIAL_STATE = {
  activeGame: '',
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
      const activeGame = action.payload;

      return {
        ...state,
        activeGame,
        loading: true,
      }
    case GAME.INIT_SUCCESS:
      const metadata = action.payload.gameMetadata;
      const frames = action.payload.frames;
      const data = frames[frames.length - 1];

      const gameDate = new Date(data.rfc460Timestamp).getTime();


      return {
        ...state,
        time: {
          ...state.time,
          initial: gameDate,
        },
        metadata,
        data,
        loading: false,
        error: false
      };
    case GAME.UPDATE_SUCCESS:
      // TODO: Check if its updating the correct game
      const metaData = action.payload.gameMetadata;
      const dataFrames = action.payload.frames;

      const lastFrame = dataFrames[dataFrames.length - 1];
      const date = new Date(lastFrame.rfc460Timestamp).getTime();
      const now = (date - state.time.initial);

      console.log("Game time: " + now + "ms");

      return {
        ...state,
        time: {
          ...state.time,
          now,
        },
        metadata: metaData,
        data: lastFrame,
        error: false
      };
    case GAME.INIT_FAILURE:
    case GAME.UPDATE_FAILURE:
      return {
        ...state,
        error: true
      }
    case GAME.CHANGE_GAME:
    case GAME.UPDATE_REQUEST:
    default:
      return state;
  }
}