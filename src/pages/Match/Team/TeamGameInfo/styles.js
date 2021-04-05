import styled from 'styled-components';

export const Container = styled.div``;

export const StatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (
    props.flipped ? 'row-reverse' : 'row'
  )};
  margin-bottom: 20px;
`;

export const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ flipped }) => (
    flipped ? 'flex-end' : 'flex-start'
  )};
`;