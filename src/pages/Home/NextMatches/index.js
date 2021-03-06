import React from 'react';

import {
  Container,
  Title,
  MatchList
} from './style';
import NextMatch from './NextMatch';

const EventData = require('../../../mocks/scheduleEvent.json');

export default function NextMatches() {
  return (
    <Container>
      <Title>Soon™</Title>
      <MatchList>
        <NextMatch data={EventData} />
      </MatchList>
    </Container>
  );
}