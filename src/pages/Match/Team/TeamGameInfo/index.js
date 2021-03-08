import React from 'react';

import {
  Container,
  StatsList,
  PlayerList
} from './styles';
import Stat, { STAT } from './Stat';

import LiveGame from '../../../mocks/liveFeedWindow.json'

export default function TeamGameInfo() {
  const blueStats = LiveGame.frames[LiveGame.frames.length - 1].redTeam;
  return (
    <Container>
      <StatsList>
        <Stat content={blueStats.totalGold} stat={STAT.COIN} />
        <Stat content={blueStats.totalKills} stat={STAT.SWORD} />
        <Stat content={blueStats.towers} stat={STAT.TOWER} />
        <Stat content={blueStats.barons} stat={STAT.BARON} />
        <Stat content={blueStats.inhibitors} stat={STAT.INHIB} />
        <Stat content={blueStats.dragons} stat={STAT.DRAKE} />
      </StatsList>
      <PlayerList></PlayerList>
    </Container>
  )
}