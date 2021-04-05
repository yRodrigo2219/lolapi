import { GAME } from '../gameInfo/types';
import { EVENTS, EVENT } from './types';

const INITIAL_STATE = {
  pastFrame: null,
  events: [],
};

function getGameState(events, gameState, pastGameState) {
  if (gameState !== pastGameState) { // if gameState has changed
    const gs = (gameState === 'in_game' ?
      EVENT.GAME.RESUME :
      gameState === 'finished' ?
        EVENT.GAME.FINISHED :
        EVENT.GAME.PAUSED);

    events.push({
      type: EVENTS.GAME,
      data: {
        status: gs,
      }
    })
  }
}

function getSlayedMonsters(events, baron, pastBaron, side, teamId) {
  // One Monster Slayed Event is triggered for each monster slayed
  // in the meantime
  for (let i = 0; i < (baron - pastBaron); i++)
    events.push({
      type: EVENTS.MONSTER,
      data: {
        teamId,
        side,
        monster: EVENT.MONSTER.BARON
      }
    });
}

function getSlayedDragons(events, dragons, pastDragons, side, teamId) {
  const newDragons = dragons.filter(dragon => !pastDragons.includes(dragon));

  // One Dragons Slayed Event is triggered for each dragons slayed
  // in the meantime
  for (let i = 0; i < newDragons.length; i++)
    events.push({
      type: EVENTS.DRAGON,
      data: {
        teamId,
        side,
        monster: newDragons[i]
      }
    });
}

function getDestroyedStructures(events, team, pastTeam, side, teamId) {
  const pastTowers = pastTeam.towers;
  const towers = team.towers;
  // One Tower Destroyed Event is triggered for each tower destroyed
  // in the meantime
  for (let i = 0; i < (towers - pastTowers); i++)
    events.push({
      type: EVENTS.STRUCTURE,
      data: {
        teamId,
        side,
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
        teamId,
        side,
        structure: EVENT.STRUCTURE.INHIB
      }
    });
}

function getKillEvents(events, frame, pastFrame, metadata) {
  const whoKilled = [];
  const whoDied = [];
  const participants =
    frame.blueTeam.participants.concat(frame.redTeam.participants);

  // Anyone got kills?
  participants.forEach(participant => {
    const id = participant.participantId;
    const gotKills =
      participant.kills - findParticipantInFrame(id, pastFrame).kills;

    for (let i = 0; i < gotKills; i++)
      whoKilled.push(id);
  });

  // Did anyone die?
  participants.forEach(participant => {
    const id = participant.participantId;
    const gotDeaths =
      participant.deaths - findParticipantInFrame(id, pastFrame).deaths;

    for (let i = 0; i < gotDeaths; i++)
      whoDied.push(id);
  })

  if (whoKilled.length !== whoDied.length)
    throw new Error('Riot sucks!');

  // Assuming that riot doesnt suck and 
  // kills are always equals to deaths  
  whoKilled.forEach(id => {
    let deadId = whoDied.splice(Math.floor(Math.random() * whoDied.length), 1)[0];

    // grants that they are in opposite teams
    while (true) {
      if ((id <= 5 && deadId > 5) || (id > 5 && deadId <= 5))
        break;

      whoDied.push(deadId);
      deadId = whoDied.splice(Math.floor(Math.random() * whoDied.length), 1)[0];
    }

    const killerMetadata = findParticipantMetadata(id);
    const deadMetadata = findParticipantMetadata(deadId);
    const killer = {
      champ: killerMetadata.championId,
      name: killerMetadata.summonerName,
    };
    const dead = {
      champ: deadMetadata.championId,
      name: deadMetadata.summonerName,
    };

    events.push({
      type: EVENTS.KILL,
      data: {
        side: (id <= 5 ? 'blue' : 'red'),
        killer,
        dead,
      }
    })
  })

  // Auxiliar Functions
  function findParticipantMetadata(id) {
    const participants =
      metadata.blueTeamMetadata.participantMetadata.concat(
        metadata.redTeamMetadata.participantMetadata
      );

    return participants.find(participant => (
      participant.participantId === id
    ));
  }

  function findParticipantInFrame(id, frame) {
    const participants =
      frame.blueTeam.participants.concat(frame.redTeam.participants);

    return participants.find(participant => (
      participant.participantId === id
    ));
  }
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME.INIT_SUCCESS:
      return INITIAL_STATE;
    case GAME.UPDATE_SUCCESS:
      // TODO: Check if its updating the correct game
      const metadata = action.payload.gameMetadata;
      const dataFrames = action.payload.frames;

      const lastFrame = dataFrames[dataFrames.length - 1];
      const events = [];

      if (state.pastFrame !== null) {
        let pastFrame = state.pastFrame;
        // fix a resume -> pause -> resume, bug
        const wasGamePaused = pastFrame.gameState === 'paused' ? true : false;
        const isGamePaused = lastFrame.gameState === 'paused' ? true : false;
        const blueTeamId = metadata.blueTeamMetadata.esportsTeamId;
        const redTeamId = metadata.redTeamMetadata.esportsTeamId;
        dataFrames.forEach(frame => {
          getKillEvents(events, frame, pastFrame, metadata);

          getSlayedMonsters(events, frame.blueTeam.barons, pastFrame.blueTeam.barons, 'blue', blueTeamId);
          getSlayedDragons(events, frame.blueTeam.dragons, pastFrame.blueTeam.dragons, 'blue', blueTeamId);
          getDestroyedStructures(events, frame.blueTeam, pastFrame.blueTeam, 'blue', blueTeamId);

          getSlayedMonsters(events, frame.redTeam.barons, pastFrame.redTeam.barons, 'red', redTeamId);
          getSlayedDragons(events, frame.redTeam.dragons, pastFrame.redTeam.dragons, 'red', redTeamId);
          getDestroyedStructures(events, frame.redTeam, pastFrame.redTeam, 'red', redTeamId);

          if (!wasGamePaused && !isGamePaused)
            getGameState(events, frame.gameState, pastFrame.gameState);

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