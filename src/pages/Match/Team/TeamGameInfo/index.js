import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectTeamParticipants,
  selectTeamData,
  selectTeamSide,
} from '../../../../store/ducks/gameInfo/selects';
import {
  Container,
  StatsList,
  PlayerList
} from './styles';
import Stat, { STAT } from './Stat';

export default function TeamGameInfo({ flipped, id }) {
  const teamPart = useSelector(selectTeamParticipants(id));
  const teamSide = useSelector(selectTeamSide(id));
  const teamData = useSelector(selectTeamData(teamSide));

  if (teamSide === '')
    return null;

  return (
    <Container>
      <StatsList flipped={flipped}>
        <Stat content={teamData.totalGold}
          stat={STAT.COIN} flipped={flipped} />

        <Stat content={teamData.totalKills}
          stat={STAT.SWORD} flipped={flipped} />

        <Stat content={teamData.towers}
          stat={STAT.TOWER} flipped={flipped} />

        <Stat content={teamData.barons}
          stat={STAT.BARON} flipped={flipped} />

        <Stat content={teamData.inhibitors}
          stat={STAT.INHIB} flipped={flipped} />

        <Stat content={teamData.dragons}
          stat={STAT.DRAKE} flipped={flipped} />

      </StatsList>
      <PlayerList></PlayerList>
    </Container>
  )
}