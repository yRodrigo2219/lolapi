import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../assets/css/StylePattern';

export const LogoLink = styled(Link)`
  min-width: 144px;
  text-align: center;
  color: ${Colors.primaryDark};
  text-decoration: none;
  line-height: 32px;
  font-size: 32px;
  font-weight: 700;

  :hover {
    color: ${Colors.primarySelect};
  }

  :active {
    transform: translateY(2px);
  }
`;