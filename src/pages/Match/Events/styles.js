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
  line-height: 32px;
`;

export const Toast = styled(ToastContainer)`
  .Toastify__close-button {
    color: ${Colors.primary};
  }

  .Toastify__toast-body {
    width: 100%;
  }

  .Toastify__progress-bar {
    background: ${Colors.primary};
  }
`;