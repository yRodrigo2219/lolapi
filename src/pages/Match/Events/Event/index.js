import React from 'react';

import EventSVG, { ACTION_TYPE } from '../../../../assets/svgs/events';
import {
  Container,
  ActorContainer
} from './styles';

export const EVENTS = Object.freeze({
  KILL: 'kill',
  STRUCTURE: 'structure',
  DRAGON: 'dragon',
  MONSTER: 'monster',
  GAME: 'game',
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
    default:
      return (data.type + ' event!');
  }
}

const chmpImg = 'https://am-a.akamaihd.net/image?resize=64:&f=https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/Gnar.png';

function RenderKillEvent({ data }) {
  const side = data.side;
  const againstSide = side === 'blue' ? 'red' : 'blue';

  return (
    <Container>
      <ActorContainer side={side}>
        <img src={chmpImg} alt='' />
        <span>DP fabFabulous</span>
      </ActorContainer>

      <EventSVG stat={ACTION_TYPE.KILLED} />

      <ActorContainer side={againstSide}>
        <img src={chmpImg} alt='' />
        <span>DP fabFabulous</span>
      </ActorContainer>
    </Container>
  )
}

