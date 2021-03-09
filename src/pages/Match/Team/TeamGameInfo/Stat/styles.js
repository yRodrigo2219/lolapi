import styled from 'styled-components';

import { Colors } from '../../../../../assets/css/StylePattern';

export const Container = styled.span`
  display: flex;
  height: 52px;
  min-width: 98px;
  background-color: ${Colors.secondary};
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  margin: 0px 18px 18px 0px;

  svg {
    margin: 0px 10px;
    fill: ${props => (
    props.side === 'blue' ? Colors.blueSide : Colors.redSide
  )};
  }

  span {
    display: flex;
    color: ${Colors.primaryDark};
    line-height: 32px;
    font-size: 32px;
    margin-right: 10px;

    svg {
      margin: 0px 2px;
    }
  }
`;