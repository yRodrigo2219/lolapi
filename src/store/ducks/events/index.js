import { GAME } from '../gameInfo/types';
import { EVENTS, EVENT } from './types';

const INITIAL_STATE = {
  pastFrame: null,
  events: [],
};

function getStructuresDestroyed(events, team, pastTeam, side) {
  const pastTowers = pastTeam.towers;
  const towers = team.towers;
  // One Tower Destroyed Event is triggered for each tower destroyed
  // in the meantime
  for (let i = 0; i < (towers - pastTowers); i++)
    events.push({
      type: EVENTS.STRUCTURE,
      data: {
        side: side,
        structure: EVENT.STRUCTURE.TOWER
      }
    });

  const pastInhibs = pastTeam.inhibitors;
  const inhibs = team.inhibitors;
  // One Inhibitor Destroyed Event is triggered for each inhibitor destroyed
  // in the meantime
  for (let i = 0; i < (inhibs - pastInhibs); i++)
    events.push({
      type: EVENTS.STRUCTURE,
      data: {
        side: side,
        structure: EVENT.STRUCTURE.INHIB
      }
    });
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.INIT_SUCCESS:
      return INITIAL_STATE;
    case GAME.UPDATE_SUCCESS:
      // TODO: Check if its updating the correct game
      const metaData = action.payload.gameMetadata;
      const dataFrames = action.payload.frames;

      const lastFrame = dataFrames[dataFrames.length - 1];
      const events = [];

      if (state.pastFrame !== null) {
        let pastFrame = state.pastFrame;
        dataFrames.forEach(frame => {

          // TODOS:
          // Kill Event
          getStructuresDestroyed(events, frame.blueTeam, pastFrame.blueTeam, 'blue');
          getStructuresDestroyed(events, frame.redTeam, pastFrame.redTeam, 'red');
          // Dragon Events
          // Epic Monster Events
          // Game Status Events

          pastFrame = frame;
        });
      }

      return {
        ...state,
        pastFrame: lastFrame,
        events,
      };
    default:
      return state;
  }
}