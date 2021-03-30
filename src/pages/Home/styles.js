import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 52px);
  
  @media only screen and (max-width: 859px) {
    flex-direction: column;
  }
`;

export const FreeSpace = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (max-width: 1150px){
    justify-content: center;
  }
`;