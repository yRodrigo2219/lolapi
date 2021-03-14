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
import PlayerStats from './PlayerStats';

export default function TeamGameInfo({ flipped, id }) {
  const teamPart = useSelector(selectTeamParticipants(id));
  const teamSide = useSelector(selectTeamSide(id));
  const teamData = useSelector(selectTeamData(teamSide));

  if (teamSide === '')
    return null;

  return (
    <Container>
      <StatsList flipped={flipped}>
        <Stat content={teamData.totalGold} side={teamSide}
          stat={STAT.COIN} flipped={flipped} />

        <Stat content={teamData.totalKills} side={teamSide}
          stat={STAT.SWORD} flipped={flipped} />

        <Stat content={teamData.towers} side={teamSide}
          stat={STAT.TOWER} flipped={flipped} />

        <Stat content={teamData.barons} side={teamSide}
          stat={STAT.BARON} flipped={flipped} />

        <Stat content={teamData.inhibitors} side={teamSide}
          stat={STAT.INHIB} flipped={flipped} />

        <Stat content={teamData.dragons} side={teamSide}
          stat={STAT.DRAKE} flipped={flipped} />

      </StatsList>
      <PlayerList>
        {
          teamPart.map(player => {
            const id = player.participantId;
            const data = teamData.participants.find(playerData => (
              id === playerData.participantId
            ));

            return (
              <PlayerStats key={id} flipped={flipped} player={player} data={data} />
            )
          })
        }
      </PlayerList>
    </Container>
  )
}