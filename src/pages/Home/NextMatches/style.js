import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  height: calc(100vh - 52px);
  max-width: 670px;
  width: 100%;
  flex-shrink: 1.85;
  background-color: ${Colors.secondary};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media only screen and (max-width: 859px) {
    max-width: 100%;
    height: 100vh;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
  }
`;

export const Title = styled.h1`
  color: ${Colors.primaryDark};
  text-align: center;
  line-height: 32px;
  font-size: 32px;
  margin: 0px;
  padding: 25px 0px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.25);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media only screen and (max-width: 859px) {
    box-shadow: none;
  }
`;

export const Footer = styled.div`
  height: 10px;
`;

export const MatchList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100% - 92px);
  padding: 30px 44px 40px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.secondaryDark};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${Colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.primarySelect}; 
  }

  @media only screen and (min-width: 860px) and (max-width: 1150px){
    padding: 30px 24px 40px;
  }

  @media only screen and (max-width: 859px) {
    align-items: center;
  }
`;