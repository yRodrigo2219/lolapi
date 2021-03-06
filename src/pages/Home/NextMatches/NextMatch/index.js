import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'

import {
  Container,
  LeagueImage,
  Center,
  ScoreBoard,
  Score,
  TeamInfo,
  MatchTime
} from './style';
import { leagueImage } from '../../../../store/ducks/leagues/selects';
import { resizeImgSrc } from '../../../../services/riot';

export default function NextMatch({ data }) {
  const lgImage = useSelector(leagueImage(data.league.slug));
  //const lgName = data.league.name;
  const [fstTeam, sndTeam] = data.match.teams;
  const id = data.match.id;
  const date = format(new Date(data.startTime), 'MM/dd HH:mma');

  return (
    <Container to={`/match/${id}`}>
      <LeagueImage src={resizeImgSrc(56, lgImage)} alt="" />

      <Center>
        <ScoreBoard>
          <TeamInfo>
            <span>{fstTeam.code}</span>
            <img src={resizeImgSrc(64, fstTeam.image)} alt="" />
          </TeamInfo>
          <Score>:</Score>
          <TeamInfo>
            <img src={resizeImgSrc(64, sndTeam.image)} alt="" />
            <span>{sndTeam.code}</span>
          </TeamInfo>
        </ScoreBoard>
      </Center>

      <MatchTime>{date}</MatchTime>
    </Container>
  );
}