import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  max-width: 240px;
  min-width: 240px;
`;

export const Options = styled.div`
  display: flex;
  background-color: ${Colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 240px;
  height: 240px;
  margin-top: 24px;
  flex-direction: column;

  > span {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`;

export const Config = styled.div`
  margin: 0px 12px;

  > span {
    color: ${Colors.primary};
    font-size: 24px;
    line-height: 32px;
  }
`;

export const GameButton = styled.button`
  border: none;
  padding: 0px;
  display: inline-block;
  color: ${Colors.secondary};
  background-color: ${({ active }) => (
    active ? Colors.primary : Colors.primaryDark
  )};
  border-radius: 2px;
  width: 32px;
  line-height: 32px;
  font-size: 24px;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
  text-align: center;
  text-decoration: none;
  margin-right: 4px;

  :hover {
    cursor: pointer;
    background-color: ${Colors.primarySelect};
  }

  :active {
    transform: translateY(2px);
  }
`;