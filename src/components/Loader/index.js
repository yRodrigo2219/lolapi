import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Colors } from '../../assets/css/StylePattern';
import { Container, LoaderCSS } from './styles';

export default function Loader() {
  return (
    <Container>
      <ClipLoader color={Colors.secondary} css={LoaderCSS} />
    </Container>
  )
}