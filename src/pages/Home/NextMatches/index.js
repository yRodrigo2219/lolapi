import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Title,
  MatchList
} from './style';
import NextMatch from './NextMatch';
import { nextMatches } from '../../../store/ducks/schedule/selects';

export default function NextMatches() {
  const next = useSelector(nextMatches);

  return (
    <Container>
      <Title>Soon™</Title>
      <MatchList>
        {
          next.map(
            event => (<NextMatch data={event} key={event.match.id} />)
          )
        }
      </MatchList>
    </Container>
  );
}