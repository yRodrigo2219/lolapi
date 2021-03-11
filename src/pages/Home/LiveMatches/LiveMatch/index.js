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

export default function LiveMatch({ data }) {
  const lgImage = useSelector(leagueImage(data.league.slug));
  //const lgName = data.league.name;
  const [fstTeam, sndTeam] = data.match.teams;
  const id = data.match.id;

  return (
    <Container to={`/match/${id}`}>
      <LeagueImg src={`https://am-a.akamaihd.net/image?resize=80:&f=${lgImage}`} />

      <Center>
        <ScoreBoard>
          <TeamInfo>
            <span>{fstTeam.code}</span>
            <img src={`https://am-a.akamaihd.net/image?resize=88:&f=${fstTeam.image}`} alt="" />
          </TeamInfo>
          <Score>
            <span>{fstTeam.result.gameWins}</span>
          :
          <span>{sndTeam.result.gameWins}</span>
          </Score>
          <TeamInfo>
            <img src={`https://am-a.akamaihd.net/image?resize=88:&f=${sndTeam.image}`} alt="" />
            <span>{sndTeam.code}</span>
          </TeamInfo>
        </ScoreBoard>
      </Center>
    </Container>
  );
}