import React from 'react';

import {
  Container,
  LeagueImage,
  Center,
  ScoreBoard,
  Score,
  TeamInfo,
  MatchTime
} from './style';

export default function NextMatch(props) {
  // leagueName used as tooltip
  const [leagueImage, leagueName] = getLeagueInfo(props.data);
  const [fstTeam, sndTeam] = getTeamsInfo(props.data);

  return (
    <Container to='/match/105539760574818413'>
      <LeagueImage src={leagueImage} />

      <Center>
        <ScoreBoard>
          <TeamInfo>
            <span>{fstTeam.code}</span>
            <img src={fstTeam.image} alt="" />
          </TeamInfo>
          <Score>:</Score>
          <TeamInfo>
            <img src={sndTeam.image} alt="" />
            <span>{sndTeam.code}</span>
          </TeamInfo>
        </ScoreBoard>
      </Center>

      <MatchTime>02/23 15:00PM</MatchTime>
    </Container>
  );
}

function getLeagueInfo(data) {
  // getLeague da as imagens, usar redux pra pegar de la
  const img = 'http://static.lolesports.com/leagues/cblol-logo-symbol-offwhite.png';
  const name = data.league.name;

  return [img, name];
}

function getTeamsInfo(data) {
  const fstTeam = data.match.teams[0];
  const sndTeam = data.match.teams[1];

  return [fstTeam, sndTeam];
}