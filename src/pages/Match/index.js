import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
} from './styles';
import Loader from '../../components/Loader';
import Team from './Team';
import { loadRequest } from '../../store/ducks/matchDetails/actions';
import { selectIsMatchActive } from '../../store/ducks/matchDetails/selects';
import Menu from './Menu';
import Events from './Events';

export default function Match() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isMatchActive = useSelector(selectIsMatchActive(id));

  useEffect(() => {
    dispatch(loadRequest(id));
  }, [dispatch, id]);

  if (!isMatchActive)
    return <Loader />;

  return (
    <>
      <Events />
      <Container>
        <Team />
        <Menu />
        <Team flipped />
      </Container>
    </>

  );
}