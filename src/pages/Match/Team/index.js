import React from 'react';

import { Container } from './styles';
import TeamInfo from './TeamInfo';
import TeamGameInfo from './TeamGameInfo';

export default function Team({ teamData, flipped }) {
  if (!teamData)
    return null;

  return (
    <Container>
      <TeamInfo code={teamData.code} name={teamData.name}
        flipped={!!flipped} src={teamData.image}
        result={teamData.result.gameWins} />
      <TeamGameInfo flipped={!!flipped} />

    </Container>
  );
}