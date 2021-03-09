import styled from 'styled-components';

export const Container = styled.div``;

export const StatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (
    props.flipped ? 'row-reverse' : 'row'
  )};
`;

export const PlayerList = styled.div``;