import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRequest } from '../../store/ducks/leagues/actions';

import { Container, FreeSpace } from './styles';
import LiveMatches from './LiveMatches';
import NextMatches from './NextMatches';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [])

  return (
    <Container>
      <FreeSpace>
        <LiveMatches />
      </FreeSpace>
      <NextMatches />
    </Container>
  );
}