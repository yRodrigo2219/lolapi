import { createGlobalStyle } from 'styled-components';

import { Colors } from './StylePattern';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 600;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${Colors.primary};
  }
`;

export default GlobalStyle;