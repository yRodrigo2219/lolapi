import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  min-width: 408px;
  max-width: 670px;
  width: 100%;
  flex-shrink: 2;
  background-color: ${Colors.secondaryDark};
`;

export const Title = styled.h1`
  color: ${Colors.primaryDark};
  text-align: center;
  line-height: 32px;
  font-size: 32px;
  margin: 25px 0px;
`;

export const MatchList = styled.div`
  padding: 0px 44px;
`;