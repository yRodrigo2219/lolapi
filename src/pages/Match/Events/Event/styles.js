import styled from 'styled-components';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ActorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.primary};
  font-size: 16px;

  img {
    width: 42px;
    height: 42px;
    border: 4px solid ${({ side }) => (
    side === 'blue' ?
      Colors.blueSide :
      Colors.redSide
  )};
    border-radius: 50%;
  }
`;

export const TeamContainer = styled.span`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
    border: 4px solid ${({ side }) => (
    side === 'blue' ?
      Colors.blueSide :
      Colors.redSide
  )};
    border-radius: 50%;
    background-color: ${Colors.primaryDark};
  }

  span {
    font-size: 24px;
    color: ${Colors.primary};
  }
`;

export const ActedContainer = styled.span`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
    border: 4px solid ${({ side }) => (
    side === 'blue' ?
      Colors.blueSide :
      Colors.redSide
  )};
    border-radius: 50%;
  }

  span {
    font-size: 20px;
  }
`;