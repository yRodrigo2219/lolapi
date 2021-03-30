import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 52px);
`;

export const FreeSpace = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (min-width: 860px) and (max-width: 1150px){
    justify-content: center;
  }
`;