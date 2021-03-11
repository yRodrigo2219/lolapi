import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest as getUpcoming } from '../../store/ducks/leagues/actions';
import { areMatchesLoaded } from '../../store/ducks/schedule/selects';

import { Container, FreeSpace } from './styles';
import Loader from '../../components/Loader';
import LiveMatches from './LiveMatches';
import NextMatches from './NextMatches';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);

  if (!useSelector(areMatchesLoaded))
    return <Loader />;

  return (
    <Container>
      <FreeSpace>
        <LiveMatches />
      </FreeSpace>
      <NextMatches />
    </Container>
  );
}