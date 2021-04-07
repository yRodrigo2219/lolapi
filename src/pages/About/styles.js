import styled from 'styled-components';

import { Colors } from '../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 52px);

  > div {
    margin-top: 10vh;
  }
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border: 4px solid ${Colors.primarySelect};
    border-radius: 50%;
    width: 160px;
  }

  span {
    color: ${Colors.secondary};
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 24px;

  button {
    width: 36px;
    height: 36px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    svg {
      fill: ${Colors.secondary};
      width: inherit;
      height: inherit;
    }
  }

  button:hover {
    svg {
      fill: ${Colors.primarySelect};
    }
  }
`;

