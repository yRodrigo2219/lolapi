import styled from 'styled-components';

import { Colors } from '../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 52px);
  background-color: ${Colors.secondaryDark};

  @media only screen and (max-width: 959px) {
    flex-wrap: wrap;
    justify-content: space-between;
    
    #menu {
      display: flex;
      order: -1;
      width: 100%;
      height: 300px;
      justify-content: center;
    }
  }
`;