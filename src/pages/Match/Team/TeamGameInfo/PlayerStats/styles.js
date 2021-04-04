import styled from 'styled-components';

import { Colors } from '../../../../../assets/css/StylePattern';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 80px;
  width: 680px;
  padding: 4px 12px;
  background-color: ${Colors.secondary};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  margin-bottom: 20px;
  justify-content: space-between;
  flex-direction: ${({ flipped }) => (
    flipped ?
      'row-reverse' :
      'row'
  )};

  >div {
    display: flex;
    align-items: center;
    flex-direction: ${({ flipped }) => (
    flipped ?
      'row-reverse' :
      'row'
  )};
  }

  @media only screen and (max-width: 1620px){
    width: 344px;
    height: 140px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media only screen and (max-width: 960px){
    height: 80px;
    width: 320px;
    flex-wrap: nowrap;
  }
`;

export const Runes = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  span {
    display: contents;
    
    img {
      background-color: ${Colors.primaryDark};
      border-radius: 50%;
      width: 32px;
      height: 32px;
    }
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Player = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  flex-direction: ${({ flipped }) => (
    flipped ?
      'row-reverse' :
      'row'
  )};

  img {
    height: 72px;
    width: 72px;
    border-radius: 50%;
    z-index: 1;
  }

  >span {
    display: flex;
    flex-direction: column;
    width: 120px;

    h2 {
      margin: 0px;
      line-height: 24px;
      font-size: 16px;
      white-space: nowrap;
      text-align: ${({ flipped }) => (
    flipped ?
      'right' :
      'left'
  )};
      overflow: hidden;
      color: ${Colors.primaryDark};
    }

    >span {
      font-size: 24px;
      line-height: 24px;
      color: ${Colors.primaryDark};
      text-align: center;
    }
  }
`;

export const Level = styled.h1`
  margin: 0px;
  position: absolute;
  background-color: ${Colors.primaryDark};
  border-radius: 8px;
  line-height: 28px;
  font-size: 24px;
  color: ${Colors.secondary};
  width: 28px;
  text-align: center;
  bottom: 0px;
  z-index: 5;
`;

export const Health = styled.span`
  display: flex;
  height: 20px;
  background-color: ${Colors.secondaryDark};
  border: 1px solid #3B174D;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.25);
  position: relative;
  left: ${({ flipped }) => (
    flipped ?
      '3px' :
      '-3px'
  )};
  flex-direction: ${({ flipped }) => (
    flipped ?
      'row-reverse' :
      'row'
  )};

  >div {
    height: 100%;
    border-radius: 2px;
    background-color: #E60B40;
    width: ${({ hp }) => `${hp}%`};
    transition: width 500ms ease;
  }

  >span {
    position: absolute;
    width: 34px;
    text-align: ${({ flipped }) => (
    flipped ?
      'right' :
      'left'
  )};
    left: ${({ flipped }) => (
    flipped ?
      '80px' :
      '5px'
  )};
    color: ${Colors.secondary};
    font-size: 16px;
    line-height: 20px;
  }
`;

export const CreepScore = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;

  #extragold {
    display: none;
    height: 24px;

    span {
      color: #E68E0B;
    }
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin: 0px 4px 0px 0px;
      color: ${Colors.primary};
      font-size: 24px;
      line-height: 24px;
    }

    svg {
      width: 20px;
      fill: #E68E0B;
    }
  }

  >span {
    line-height: 24px;
    font-size: 16px;
    color: ${Colors.primaryDark};
    opacity: 0.75;
  }

  @media only screen and (max-width: 1620px){
    #extragold {
      display: flex;
    }
  }
`;

export const Bag = styled.span`
  display: flex;
  flex-direction: column;
  width: 332px;
  max-height: 72px;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ flipped }) => (
    flipped ?
      'row-reverse' :
      'row'
  )};
  }
  
  >span {
    display: flex;
    align-items: center;
    height: 24px;
    align-self: center;

    span {
      color: #E68E0B;
      line-height: 24px;
      font-size: 24px;
    }

    svg {
      width: 20px;
      fill: #E68E0B;
    }

    @media only screen and (min-width: 960px) and (max-width: 1620px){
      display: none;
    }
  }

  div > label {
    position: relative;
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    border: 2px solid ${Colors.primaryDark};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: ${Colors.primary};
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 600;

    span {
      position: absolute;
      color: ${Colors.secondary};
      font-size: 16px;
      bottom: -2px;
      right: 2px;
    }
  }

  @media only screen and (max-width: 960px){
    display: none;
  }
`;