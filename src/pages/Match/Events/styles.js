import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Colors } from '../../../assets/css/StylePattern';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.primaryDark};
  font-family: 'Fira Sans Extra Condensed', sans-serif;
  font-weight: 600;
  font-size: 24px;
  white-space: nowrap;
`;

export const Toast = styled(ToastContainer)`
  min-width: 400px;
  width: auto;

  .Toastify__close-button {
    color: ${Colors.primary};
  }

  .Toastify__toast-body {
    width: 100%;
    max-height: inherit;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    // Hiding ScrollBars
    -ms-overflow-style: none;  // IE and Edge
    scrollbar-width: none;  // Firefox
    ::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }
  }

  .Toastify__progress-bar {
    background: ${Colors.primary};
  }

  @media only screen and (max-width: 600px) {
    min-width: 0;
  }
`;