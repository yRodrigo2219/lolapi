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