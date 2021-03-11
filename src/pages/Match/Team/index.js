import React from 'react';
import { useSelector } from 'react-redux';

import { selectTeam } from '../../../store/ducks/matchDetails/selects';
import { selectIsGameLoading } from '../../../store/ducks/gameInfo/selects';
import { Container } from './styles';
import TeamInfo from './TeamInfo';
import TeamGameInfo from './TeamGameInfo';

export default function Team({ flipped }) {
  const teamData = useSelector(selectTeam(!!flipped));
  const isGameLoading = useSelector(selectIsGameLoading);
  const result = (teamData.result ? teamData.result.gameWins : 0);

  return (
    <Container>
      <TeamInfo code={teamData.code} name={teamData.name}
        flipped={!!flipped} src={teamData.image}
        result={result} />
      {
        isGameLoading ?
          null :
          <TeamGameInfo flipped={!!flipped} id={teamData.id} />
      }
    </Container>
  );
}