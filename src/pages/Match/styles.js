import styled from 'styled-components';

import { Colors } from '../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 52px);
  background-color: ${Colors.secondaryDark};
`;