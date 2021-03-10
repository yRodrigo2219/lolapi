import React from 'react';

import { Container } from './styles';
import TeamInfo from './TeamInfo';
import TeamGameInfo from './TeamGameInfo';

export default function Team({ teamData, flipped }) {
  if (!teamData)
    return null;

  const result = (teamData.result ? teamData.result.gameWins : 0);

  return (
    <Container>
      <TeamInfo code={teamData.code} name={teamData.name}
        flipped={!!flipped} src={teamData.image}
        result={result} />
      <TeamGameInfo flipped={!!flipped} />

    </Container>
  );
}