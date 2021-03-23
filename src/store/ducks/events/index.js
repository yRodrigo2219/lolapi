import { GAME } from '../gameInfo/types';

const INITIAL_STATE = {
  pastFrame: {},
  events: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.INIT_SUCCESS:
      return INITIAL_STATE;
    case GAME.UPDATE_SUCCESS:
      // TODO: Check if its updating the correct game
      const metaData = action.payload.gameMetadata;
      const dataFrames = action.payload.frames;
      const events = [];

      const lastFrame = dataFrames[dataFrames.length - 1];


      return {
        ...state,
        pastFrame: lastFrame,
        events,
      };
    default:
      return state;
  }
}