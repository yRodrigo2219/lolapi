import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled(Link)`
  box-sizing: border-box;
  display: flex;
  background-color: ${Colors.primaryDark};
  max-width: 600px;
  min-width: 480px;
  height: 96px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;

  :hover {
    background-color: ${Colors.primarySelect};
  }

  :active {
    transform: translateY(8px);
  }
`;

export const LeagueImg = styled.img`
  align-self: center;
  margin-left: 8px;
  height: 80px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

export const ScoreBoard = styled.span`
  display: flex;
  color: ${Colors.secondary};
  align-items: center;
  line-height: 32px;
  font-size: 32px;
`;

export const Score = styled.span`
  span {
    margin: 0px 5px;
  }
`;

export const TeamInfo = styled.span`
  display: flex;
  align-items: center;

  img {
    height: 88px;
  }
`;
