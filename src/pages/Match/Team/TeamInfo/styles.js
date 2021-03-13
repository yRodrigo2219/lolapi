import styled from 'styled-components';

import { Colors } from '../../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${props => (
    props.flipped ? 'flex-end' : 'flex-start'
  )};

  img {
    order: ${props => (
    props.flipped ? '1' : '0'
  )};
    max-height: 180px;
    margin: 12px 0px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => (
    props.flipped ? 'right' : 'left'
  )};
  margin: 0px 5px;

  h1 {
    color:${Colors.primaryDark};
    width: 100%;
    line-height: 48px;
    font-size: 48px;
    margin: 0px;
  }

  h2 {
    color:${Colors.primary};
    width: 100%;
    line-height: 24px;
    font-size: 24px;
    margin: 0px;
  }
`;