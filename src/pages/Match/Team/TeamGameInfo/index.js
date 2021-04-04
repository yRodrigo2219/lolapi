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

  return (
    <Container>
      <StatsList flipped={flipped}>
        <Stat content={teamData?.totalGold ?? 0} side={teamSide}
          stat={STAT.COIN} flipped={flipped} />

        <Stat content={teamData?.totalKills ?? 0} side={teamSide}
          stat={STAT.SWORD} flipped={flipped} />

        <Stat content={teamData?.towers ?? 0} side={teamSide}
          stat={STAT.TOWER} flipped={flipped} />

        <Stat content={teamData?.barons ?? 0} side={teamSide}
          stat={STAT.BARON} flipped={flipped} />

        <Stat content={teamData?.inhibitors ?? 0} side={teamSide}
          stat={STAT.INHIB} flipped={flipped} />

        <Stat content={teamData?.dragons ?? []} side={teamSide}
          stat={STAT.DRAKE} flipped={flipped} />

      </StatsList>
      <PlayerList flipped={flipped}>
        {
          teamPart.map(player => {
            const id = player.participantId;
            const data = teamData.participants.find(playerData => (
              id === playerData.participantId
            ));

            return (
              <PlayerStats key={id} flipped={flipped} data={data} metadata={player} />
            )
          })
        }
      </PlayerList>
    </Container>
  )
}