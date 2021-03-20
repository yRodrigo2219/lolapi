import React from 'react';

import { Container } from './styles';

export const EVENTS = Object.freeze({
  KILL: 'kill',
  STRUCTURE: 'structure',
  DRAGON: 'dragon',
  MONSTER: 'monster',
  GAME: 'game',
});

export default function Event({ data }) {
  return (
    <Container>
      <RenderEvent data={data} />
    </Container>
  )
}

function RenderEvent({ data }) {
  switch (data.type) {
    default:
      return (data.type + ' event!');
  }
}