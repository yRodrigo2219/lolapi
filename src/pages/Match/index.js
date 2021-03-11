import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
} from './styles';
import Team from './Team';
import { loadRequest } from '../../store/ducks/matchDetails/actions';
import { selectIsMatchActive } from '../../store/ducks/matchDetails/selects';
import Menu from './Menu';

export default function Match() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isMatchActive = useSelector(selectIsMatchActive(id));

  useEffect(() => {
    dispatch(loadRequest(id));
  }, [dispatch, id]);

  if (!isMatchActive)
    return null; // Return loading

  return (
    <Container>
      <Team />
      <Menu />
      <Team flipped />
    </Container>
  );
}