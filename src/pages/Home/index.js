import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHome as getUpcoming } from '../../store/ducks/pages/actions';
import { selectIsHomeLoading } from '../../store/ducks/pages/selects';

import { Container, FreeSpace } from './styles';
import Loader from '../../components/Loader';
import LiveMatches from './LiveMatches';
import NextMatches from './NextMatches';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);

  if (useSelector(selectIsHomeLoading))
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