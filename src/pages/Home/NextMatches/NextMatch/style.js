import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  height: 72px;
  border-radius: 10px;
  max-width: 400px;
  min-width: 320px;
  width: 100%;
  background-color: ${Colors.primaryDark};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  margin-bottom: 24px;

  :hover {
    background-color: ${Colors.primarySelect};
  }

  :active {
    transform: translateY(4px);
  }

  @media only screen and (min-width: 860px) and (max-width: 1150px){
    min-width: 250px;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

export const LeagueImage = styled.img`
  align-self: center;
  margin-left: 4px;
  height: 56px;
  
  @media only screen and (min-width: 860px) and (max-width: 1150px){
    display: none;
  }
`;

export const ScoreBoard = styled.span`
  display: flex;
  color: ${Colors.secondary};
  align-items: center;
  line-height: 32px;
  font-size: 24px;
`;

export const Score = styled.span`
  margin: 0px 5px;
`;

export const TeamInfo = styled.span`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }
`;

export const MatchTime = styled.span`
  line-height: 16px;
  font-size: 16px;
  color: ${Colors.primary};
  position: absolute;
  bottom: -20px;
  right: 4px;
`;