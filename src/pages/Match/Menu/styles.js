import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  max-width: 240px;
  min-width: 240px;
`;

export const Options = styled.div`
  background-color: ${Colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 240px;
  height: 240px;
  margin-top: 24px;
`;