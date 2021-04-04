import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { selectEvents } from '../../../store/ducks/events/selects';
import Event from './Event';
import {
  Container,
  Toast
} from './styles';

export default function Events() {
  const events = useSelector(selectEvents);

  useEffect(() => {
    if (events.length > 0)
      toast(
        <Container>
          {
            events.map((event, index) => (
              <Event data={event} key={index} />
            ))
          }
        </Container>
      )
  }, [events]);

  return (
    <Toast
      position="top-center"
      autoClose={7500}
      closeOnClick={false}
      pauseOnFocusLoss={false}
    />
  )
}