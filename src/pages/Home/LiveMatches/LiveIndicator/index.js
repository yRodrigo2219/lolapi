import React from 'react';

import {
  Container,
  LiveSymbol,
  LiveName
} from './styles';

export default function LiveIndicator() {
  return (
    <Container>
      <LiveSymbol>⬤</LiveSymbol>
      <LiveName>LIVE</LiveName>
    </Container>
  );
}