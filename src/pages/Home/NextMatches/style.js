import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  height: calc(100vh - 52px);
  min-width: 408px;
  max-width: 670px;
  width: 100%;
  flex-shrink: 2;
  background-color: ${Colors.secondary};
`;

export const Title = styled.h1`
  color: ${Colors.primaryDark};
  text-align: center;
  line-height: 32px;
  font-size: 32px;
  margin: 0px;
  padding: 25px 0px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.25);
  border-bottom-left-radius: 20px;
`;

export const MatchList = styled.div`
  box-sizing: border-box;
  height: calc(100% - 82px);
  padding: 30px 44px 40px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.secondaryDark};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${Colors.primary}; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.primaryDark}; 
  }
`;