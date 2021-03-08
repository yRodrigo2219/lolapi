import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Menu,
} from './styles';
import Team from './Team';

import EventDetails from '../../mocks/getEventDetails.json';

export default function Match() {
  const { id } = useParams();
  const [fst, snd] = EventDetails.data.event.match.teams;

  return (
    <Container>
      <Team />
      <Menu>

      </Menu>
      <Team />
    </Container>
  );
}