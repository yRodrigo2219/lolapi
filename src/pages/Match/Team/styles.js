import styled from 'styled-components';

export const Container = styled.div`
  max-width: 680px;
  margin: 0 8px;

  @media only screen and (max-width: 960px){
    max-width: 320px;
  }

  @media only screen and (max-width: 690px){
    max-width: 100%;
  }
`;