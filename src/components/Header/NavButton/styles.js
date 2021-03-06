import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../assets/css/StylePattern';

export const Nav = styled(Link)`
  color: ${Colors.primary};
  font-size: 24px;
  line-height: 32px;
  text-decoration: none;
`;