import React from 'react';

import Event from './Event';
import { Container } from './styles';

export default function Events() {
  const events = [
    {
      type: 'kill',
      data: {
        side: 'blue',
        killerId: 1,
        killedId: 6
      }
    },
    {
      type: 'structure',
      data: {
        side: 'blue',
        structure: 'tower'
      }
    },
    {
      type: 'dragon',
      data: {
        side: 'blue',
        monster: 'mountain'
      }
    },
    {
      type: 'monster',
      data: {
        side: 'blue',
        monster: 'baron'
      }
    },
    {
      type: 'game',
      data: {
        status: 'paused'
      }
    }
  ];

  return (
    <Container>
      {
        events.map(event => (
          <Event data={event} />
        ))
      }
    </Container>
  )
}