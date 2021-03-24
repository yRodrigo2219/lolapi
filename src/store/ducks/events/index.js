import { GAME } from '../gameInfo/types';
import { EVENTS, EVENT } from './types';

const INITIAL_STATE = {
  pastFrame: null,
  events: [],
};

function getSlayedMonsters(events, baron, pastBaron, side) {
  // One Monster Slayed Event is triggered for each monster slayed
  // in the meantime
  for (let i = 0; i < (baron - pastBaron); i++)
    events.push({
      type: EVENTS.MONSTER,
      data: {
        side: side,
        monster: EVENT.MONSTER.BARON
      }
    });
}

function getSlayedDragons(events, dragons, pastDragons, side) {
  const newDragons = dragons.filter(dragon => !pastDragons.includes(dragon));

  // One Dragons Slayed Event is triggered for each dragons slayed
  // in the meantime
  for (let i = 0; i < newDragons.length; i++)
    events.push({
      type: EVENTS.DRAGON,
      data: {
        side: side,
        monster: newDragons[i]
      }
    });
}

function getDestroyedStructures(events, team, pastTeam, side) {
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
          getDestroyedStructures(events, frame.blueTeam, pastFrame.blueTeam, 'blue');
          getSlayedDragons(events, frame.blueTeam.dragons, pastFrame.blueTeam.dragons, 'blue');
          getSlayedMonsters(events, frame.blueTeam.barons, pastFrame.blueTeam.barons, 'blue');

          getDestroyedStructures(events, frame.redTeam, pastFrame.redTeam, 'red');
          getSlayedDragons(events, frame.redTeam.dragons, pastFrame.redTeam.dragons, 'red');
          getSlayedMonsters(events, frame.redTeam.barons, pastFrame.redTeam.barons, 'red');
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