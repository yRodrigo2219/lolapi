import styled, { keyframes } from 'styled-components';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  user-select: none;

  >span {
    display: flex;
    margin: 0px auto;
  }
`;

const LiveBlinkColor = keyframes`
  from {
    color: rgba(230, 11, 64, 1);
  }

  to {
    color: rgba(230, 11, 64, 0.25);
  }
`;

export const LiveSymbol = styled.span`
  vertical-align: middle;
  color: #E60B40;
  animation: ${LiveBlinkColor} 1.5s ease-in 3s infinite alternate;
  line-height: 48px;
  font-size: 24px;
`;

export const LiveName = styled.span`
  color: ${Colors.secondary};
  line-height: 48px;
  font-size: 48px;
  font-weight: 700;
`;