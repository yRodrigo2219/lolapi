import { DETAILS } from './types';
import { GAME } from '../gameInfo/types';

const INITIAL_STATE = {
  participants: []
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.INIT_REQUEST:
      return INITIAL_STATE;
    case DETAILS.SUCCESS:
      const data = action.payload.frames;
      const lastFrame = data[data.length - 1];

      const participants = lastFrame.participants;

      return {
        ...state,
        participants,
      }
    default:
      return state;
  }
}