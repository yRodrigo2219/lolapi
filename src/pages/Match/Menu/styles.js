import styled from 'styled-components';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  max-width: 240px;
  min-width: 240px;
`;

export const Options = styled.div`
  position: relative;
  display: flex;
  background-color: ${Colors.secondary};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
  margin: 0px 12px 10px;

  > span {
    color: ${Colors.primary};
    font-size: 24px;
    line-height: 32px;
  }

  label {
    position: relative;
    color: ${Colors.primaryDark};

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input {
      box-sizing: border-box;
      font-family: 'Fira Sans Extra Condensed', sans-serif;
      font-weight: 600;
      color: ${Colors.primaryDark};
      -moz-appearance: textfield;
      border: 2px solid #3B174D;
      border-radius: 4px;
      margin-left: 12px;
      padding-left: 8px;
      width: 70px;
      height: 32px;
      font-size: 24px;
      background-color: #F1F0F2;
    }

    span {
      font-size: 16px;
      position: absolute;
      right: 5px;
      bottom: 0px;
    }
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

export const GameStatus = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 25%;
  bottom: -32px;
  width: 120px;
  min-height: 72px;
  background-color: ${Colors.secondary};
  border-radius: 4px;
  fill: ${Colors.primaryDark};
  color: ${Colors.primary};
  font-size: 24px;
  line-height: 32px;

  >div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    >div {
      display: flex;
      align-items: center;

      span {
        margin-left: 2px;
        width: 60px;
      }
    }
  }
`;

export const Latency = styled.svg`
  fill: ${({ ping }) => (
    ping < 500 ? '#1EA608' :
      ping < 1000 ? 'orange' :
        'red'
  )};
  width: 24px;
  height: 20px;
`;