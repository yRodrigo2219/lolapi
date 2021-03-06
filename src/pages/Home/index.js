import React from 'react';

import { Container } from './styles';
import LiveMatches from './LiveMatches';

export default function Home() {
  return (
    <Container>
      <LiveMatches />
    </Container>
  );
}