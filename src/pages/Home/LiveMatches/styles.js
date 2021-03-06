import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 480px;
  width: 100%;
  padding-right: 72px;
  padding-top: 28px;

  @media only screen and (min-width: 860px) and (max-width: 1150px){
    padding: 28px 36px 0px;
  }

  @media only screen and (max-width: 859px) {
    padding: 28px 16px 0px;
    min-height: 50vh;
  }

  @media only screen and (max-width: 529px){
    min-width: 380px;
  }

  @media only screen and (max-width: 429px){
    min-width: 260px;
  }
`;

export const MatchList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin: 16px 0px;
  }
`;

export const NoMatches = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 48px;
  max-width: 600px;
  min-width: 480px;
  text-align: center;
  color: ${Colors.secondary};
  line-height: 32px;
  height: 96px;
  background-color: ${Colors.primaryDark};
  font-size: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media only screen and (max-width: 529px){
    min-width: 380px;
  }

  @media only screen and (max-width: 429px){
    min-width: 260px;
    font-size: 28px;
  }
`;