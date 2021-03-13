import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  LeagueImg,
  ScoreBoard,
  Score,
  TeamInfo,
  Center
} from './styles';
import { leagueImage } from '../../../../store/ducks/leagues/selects';
import { resizeImgSrc } from '../../../../services/riot';

export default function LiveMatch({ data }) {
  const lgImage = useSelector(leagueImage(data.league.slug));
  //const lgName = data.league.name;
  const [fstTeam, sndTeam] = data.match.teams;
  const id = data.match.id;

  return (
    <Container to={`/match/${id}`}>
      <LeagueImg src={resizeImgSrc(80, lgImage)} alt="" />

      <Center>
        <ScoreBoard>
          <TeamInfo>
            <span>{fstTeam.code}</span>
            <img src={resizeImgSrc(88, fstTeam.image)} alt="" />
          </TeamInfo>
          <Score>
            <span>{fstTeam.result.gameWins}</span>
          :
          <span>{sndTeam.result.gameWins}</span>
          </Score>
          <TeamInfo>
            <img src={resizeImgSrc(88, sndTeam.image)} alt="" />
            <span>{sndTeam.code}</span>
          </TeamInfo>
        </ScoreBoard>
      </Center>
    </Container>
  );
}