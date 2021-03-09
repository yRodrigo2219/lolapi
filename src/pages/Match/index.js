import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
} from './styles';
import Team from './Team';
import { loadRequest } from '../../store/ducks/matchDetails/actions';
import { selectTeams } from '../../store/ducks/matchDetails/selects';
import Menu from './Menu';

export default function Match() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [fst, snd] = useSelector(selectTeams(id));

  useEffect(() => {
    dispatch(loadRequest(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Team teamData={fst} />
      <Menu id={id} />
      <Team teamData={snd} flipped />
    </Container>
  );
}