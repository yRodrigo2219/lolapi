import React from 'react';

import { Container, FreeSpace } from './styles';
import LiveMatches from './LiveMatches';
import NextMatches from './NextMatches';

export default function Home() {
  return (
    <Container>
      <FreeSpace>
        <LiveMatches />
      </FreeSpace>
      <NextMatches />
    </Container>
  );
}