import styled from 'styled-components';

import { Colors } from '../../assets/css/StylePattern';

export const Container = styled.div`
  position:relative;
  background-color: ${Colors.secondary};
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div{
    margin-right: 16px;
    min-width: 160px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;