import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  TeamContainer,
  Menu,
} from './styles';
import TeamInfo from './TeamInfo';

import EventDetails from '../../mocks/getEventDetails.json';

export default function Match() {
  const { id } = useParams();
  const [fst, snd] = EventDetails.data.event.match.teams;

  return (
    <Container>
      <TeamContainer>
        <TeamInfo code={fst.code} name={fst.name}
          result={fst.result.gameWins}
          src={fst.image} />
      </TeamContainer>
      <Menu>

      </Menu>
      <TeamContainer>
        <TeamInfo code={snd.code} name={snd.name}
          result={snd.result.gameWins} flipped
          src={snd.image} />
      </TeamContainer>
    </Container>
  );
}