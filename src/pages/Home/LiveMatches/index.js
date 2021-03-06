import React from 'react';

import LiveIndicator from './LiveIndicator';
import LiveMatch from './LiveMatch';
import { Container, MatchList } from './styles';

const EventData = require('../../../mocks/scheduleEvent.json');

export default function LiveMatches() {
  return (
    <Container>
      <LiveIndicator />
      <MatchList>
        <LiveMatch data={EventData} />
        <LiveMatch data={EventData} />
      </MatchList>
    </Container>
  );
}