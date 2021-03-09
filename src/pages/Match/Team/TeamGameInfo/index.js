import React from 'react';

import {
  Container,
  StatsList,
  PlayerList
} from './styles';
import Stat, { STAT } from './Stat';

import LiveGame from '../../../../mocks/liveFeedWindow.json'

export default function TeamGameInfo({ flipped }) {
  const blueStats = LiveGame.frames[LiveGame.frames.length - 1].redTeam;
  return (
    <Container>
      <StatsList flipped={flipped}>
        <Stat content={blueStats.totalGold}
          stat={STAT.COIN} flipped={flipped} />

        <Stat content={blueStats.totalKills}
          stat={STAT.SWORD} flipped={flipped} />

        <Stat content={blueStats.towers}
          stat={STAT.TOWER} flipped={flipped} />

        <Stat content={blueStats.barons}
          stat={STAT.BARON} flipped={flipped} />

        <Stat content={blueStats.inhibitors}
          stat={STAT.INHIB} flipped={flipped} />

        <Stat content={blueStats.dragons}
          stat={STAT.DRAKE} flipped={flipped} />

      </StatsList>
      <PlayerList></PlayerList>
    </Container>
  )
}