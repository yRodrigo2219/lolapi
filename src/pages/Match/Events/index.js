import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Event from './Event';
import {
  Container,
  Toast
} from './styles';

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
    <Toast />
  )
}