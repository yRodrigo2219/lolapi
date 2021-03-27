import styled from 'styled-components';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 8px;
  height: 72px;

  > div {
    display: flex;
    align-items: center;
  }

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
  margin-right: 8px;

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
      (side === 'purple' ?
        Colors.primaryDark :
        Colors.redSide)
  )};
    border-radius: 50%;
  }

  span {
    font-size: 20px;
  }
`;