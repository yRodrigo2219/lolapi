import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Event, { EVENTS, EVENT } from './Event';
import {
  Container,
  Toast
} from './styles';

export default function Events() {
  const events = [
    {
      type: EVENTS.KILL,
      data: {
        side: 'blue',
        killerId: 1,
        killedId: 6
      }
    },
    {
      type: EVENTS.STRUCTURE,
      data: {
        side: 'blue',
        structure: EVENT.STRUCTURE.TOWER
      }
    },
    {
      type: EVENTS.DRAGON,
      data: {
        side: 'blue',
        monster: 'mountain'
      }
    },
    {
      type: EVENTS.MONSTER,
      data: {
        side: 'blue',
        monster: 'baron'
      }
    },
    {
      type: EVENTS.GAME,
      data: {
        status: 'paused'
      }
    }
  ];

  useEffect(() => {
    if (events.length > 0)
      toast(
        <Container>
          {
            events.map(event => (
              <Event data={event} />
            ))
          }
        </Container>
      )
  });

  return (
    <Toast
      position="top-center"
      autoClose={500000}
      closeOnClick={false}
      pauseOnFocusLoss={false}
    />
  )
}