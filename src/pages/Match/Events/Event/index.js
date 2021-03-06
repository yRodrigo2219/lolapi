import React from 'react';
import { useSelector } from 'react-redux';

import EventSVG, { ACTION_TYPE } from '../../../../assets/svgs/events';
import { EVENTS, EVENT } from '../../../../store/ducks/events/types';
import { selectTeamById } from '../../../../store/ducks/matchDetails/selects';
import { selectPatchVersion } from '../../../../store/ducks/riotInfo/selects';
import { getChampionImage } from '../../../../services/riot';
import {
  Container,
  ActorContainer,
  TeamContainer,
  ActedContainer,
} from './styles';

export default function Event({ data }) {
  return (
    <RenderEvent data={data} />
  )
}

function RenderEvent({ data }) {
  switch (data.type) {
    case EVENTS.KILL:
      return <RenderKillEvent data={data.data} />
    case EVENTS.STRUCTURE:
      return <RenderStructureEvent data={data.data} />
    case EVENTS.DRAGON:
      return <RenderDragonEvent data={data.data} />
    case EVENTS.MONSTER:
      return <RenderMonsterEvent data={data.data} />
    case EVENTS.GAME:
      return <RenderGameEvent data={data.data} />
    default:
      return ('');
  }
}

function RenderKillEvent({ data }) {
  const patchVersion = useSelector(selectPatchVersion);

  const side = data.side;
  const againstSide = side === 'blue' ? 'red' : 'blue';

  return (
    <Container>
      <div>
        <ActorContainer side={side}>
          <img src={getChampionImage(64, patchVersion, data.killer.champ)} alt='' />
          <span>{data.killer.name}</span>
        </ActorContainer>

        <EventSVG stat={ACTION_TYPE.KILLED} />

        <ActorContainer side={againstSide}>
          <span>{data.dead.name}</span>
          <img src={getChampionImage(64, patchVersion, data.dead.champ)} alt='' />
        </ActorContainer>
      </div>
    </Container>
  )
}

function RenderStructureEvent({ data }) {
  const team = useSelector(selectTeamById(data.teamId));
  const side = data.side;
  const againstSide = side === 'blue' ? 'red' : 'blue';

  let imgSrc = '';
  let message = '';

  switch (data.structure) {
    case EVENT.STRUCTURE.INHIB:
      imgSrc = '../imgs/structures/inhib.png';
      message = 'destroyed an Inhibitor';
      break;
    case EVENT.STRUCTURE.TOWER:
    default:
      imgSrc = '../imgs/structures/tower.png';
      message = 'destroyed a Tower';
  }

  return (
    <Container>
      <div>
        <TeamContainer side={side}>
          <img src={team.image} alt='' />
          <span>{team.code}</span>
        </TeamContainer>
        <ActedContainer side={againstSide}>
          <span>{message}</span>
          <EventSVG stat={ACTION_TYPE.KILLED} />
          <img src={imgSrc} alt='' />
        </ActedContainer>
      </div>
    </Container>
  )
}

function RenderDragonEvent({ data }) {
  const team = useSelector(selectTeamById(data.teamId));
  const side = data.side;
  const againstSide = 'purple';

  let imgSrc = '';
  const message = 'slayed Dragon';

  switch (data.monster) {
    case EVENT.DRAGON.ELDER:
      imgSrc = '../imgs/monsters/elder.png';
      break;
    case EVENT.DRAGON.INFERNAL:
      imgSrc = '../imgs/monsters/infernal.png';
      break;
    case EVENT.DRAGON.MOUNTAIN:
      imgSrc = '../imgs/monsters/mountain.png';
      break;
    case EVENT.DRAGON.WATER:
      imgSrc = '../imgs/monsters/ocean.png';
      break;
    case EVENT.DRAGON.CLOUD:
    default:
      imgSrc = '../imgs/monsters/cloud.png';
  }

  return (
    <Container>
      <div>
        <TeamContainer side={side}>
          <img src={team.image} alt='' />
          <span>{team.code}</span>
        </TeamContainer>
        <ActedContainer side={againstSide}>
          <span>{message}</span>
          <EventSVG stat={ACTION_TYPE.KILLED} />
          <img src={imgSrc} alt='' />
        </ActedContainer>
      </div>
    </Container>
  )
}

function RenderMonsterEvent({ data }) {
  const team = useSelector(selectTeamById(data.teamId));
  const side = data.side;
  const againstSide = 'purple';

  let imgSrc = '';
  let message = '';

  switch (data.monster) {
    case EVENT.MONSTER.BARON:
      imgSrc = '../imgs/monsters/baron.png';
      message = 'slayed Baron';
      break;
    case EVENT.MONSTER.HERALD:
    default:
      imgSrc = '../imgs/monsters/herald.png';
      message = 'slayed Herald';
  }

  return (
    <Container>
      <div>
        <TeamContainer side={side}>
          <img src={team.image} alt='' />
          <span>{team.code}</span>
        </TeamContainer>
        <ActedContainer side={againstSide}>
          <span>{message}</span>
          <EventSVG stat={ACTION_TYPE.KILLED} />
          <img src={imgSrc} alt='' />
        </ActedContainer>
      </div>
    </Container>
  )
}

function RenderGameEvent({ data }) {
  let message = '';

  switch (data.status) {
    case EVENT.GAME.FINISHED:
      message = 'Game is Finished!';
      break;
    case EVENT.GAME.PAUSED:
      message = 'Game Paused!';
      break;
    case EVENT.GAME.RESUME:
    default:
      message = 'Game Resumed!';
  }

  return (
    <Container>
      {message}
    </Container>
  )
}
