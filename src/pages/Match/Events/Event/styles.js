import styled from 'styled-components';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    margin: 0px 2px;
  }

  svg {
    margin: 0px 4px;
  }
`;

export const ActorContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${Colors.primary};
  font-size: 16px;

  img {
    width: 64px;
    height: 64px;
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
  margin-right: 4px;

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