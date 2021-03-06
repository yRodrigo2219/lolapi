import React from 'react';

import {
  Container,
  LiveSymbol,
  LiveName
} from './styles';

export default function LiveIndicator() {
  return (
    <Container>
      <span>
        <LiveSymbol>⬤</LiveSymbol>
        <LiveName>LIVE</LiveName>
      </span>
    </Container>
  );
}