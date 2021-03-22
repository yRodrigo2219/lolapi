import React from 'react';

import EventSVG, { ACTION_TYPE } from '../../../../assets/svgs/events';
import {
  Container,
  ActorContainer,
  TeamContainer,
  ActedContainer,
} from './styles';

export const EVENTS = Object.freeze({
  KILL: 'kill',
  STRUCTURE: 'structure',
  DRAGON: 'dragon',
  MONSTER: 'monster',
  GAME: 'game',
});

export const EVENT = Object.freeze({
  STRUCTURE: {
    TOWER: 'tower',
    INHIB: 'inhibitor',
  },
  DRAGON: {
    MOUNTAIN: 'mountain',
    INFERNAL: 'infernal',
    WATER: 'water',
    CLOUD: 'cloud',
    ELDER: 'elder',
  },
  MONSTER: {
    BARON: 'baron',
    HERALD: 'herald',
  },
  GAME: {
    PAUSED: 'paused',
    FINISHED: 'finished',
  },
});

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
    default:
      return ('');
  }
}

const chmpImg = 'https://am-a.akamaihd.net/image?resize=64:&f=https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/Gnar.png';
const teamImg = 'https://am-a.akamaihd.net/image?resize=64:&f=http://static.lolesports.com/teams/1600193815727_SuperMassiveEsportsSUP-01-FullonDark.png';

function RenderKillEvent({ data }) {
  const side = data.side;
  const againstSide = side === 'blue' ? 'red' : 'blue';

  return (
    <Container>
      <div>
        <ActorContainer side={side}>
          <img src={chmpImg} alt='' />
          <span>DP fabFabulous</span>
        </ActorContainer>

        <EventSVG stat={ACTION_TYPE.KILLED} />

        <ActorContainer side={againstSide}>
          <span>DP fabFabulous</span>
          <img src={chmpImg} alt='' />
        </ActorContainer>
      </div>
    </Container>
  )
}

function RenderStructureEvent({ data }) {
  const side = data.side;
  const againstSide = side === 'blue' ? 'red' : 'blue';

  let imgSrc = '';
  let message = '';

  switch (data.structure) {
    case EVENT.STRUCTURE.INHIB:
      imgSrc = '../imgs/structures/inhib.png';
      message = 'has destroyed an Inhibitor';
      break;
    case EVENT.STRUCTURE.TOWER:
    default:
      imgSrc = '../imgs/structures/tower.png';
      message = 'has destroyed a Tower';
  }

  return (
    <Container>
      <div>
        <TeamContainer side={side}>
          <img src={teamImg} alt='' />
          <span>SUP</span>
        </TeamContainer>
        <ActedContainer side={againstSide}>
          <span>{message}</span>
          <img src={imgSrc} alt='' />
        </ActedContainer>
      </div>
    </Container>
  )
}

function RenderDragonEvent({ data }) {
  const side = data.side;
  const againstSide = 'purple';

  let imgSrc = '';
  const message = 'has slayed a Dragon';

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
          <img src={teamImg} alt='' />
          <span>SUP</span>
        </TeamContainer>
        <ActedContainer side={againstSide}>
          <span>{message}</span>
          <img src={imgSrc} alt='' />
        </ActedContainer>
      </div>
    </Container>
  )
}

function RenderMonsterEvent({ data }) {
  const side = data.side;
  const againstSide = 'purple';

  let imgSrc = '';
  let message = '';

  switch (data.monster) {
    case EVENT.MONSTER.BARON:
      imgSrc = '../imgs/monsters/baron.png';
      message = 'has slayed Baron';
      break;
    case EVENT.MONSTER.HERALD:
    default:
      imgSrc = '../imgs/monsters/herald.png';
      message = 'has slayed Herald';
  }

  return (
    <Container>
      <div>
        <TeamContainer side={side}>
          <img src={teamImg} alt='' />
          <span>SUP</span>
        </TeamContainer>
        <ActedContainer side={againstSide}>
          <span>{message}</span>
          <img src={imgSrc} alt='' />
        </ActedContainer>
      </div>
    </Container>
  )
}
