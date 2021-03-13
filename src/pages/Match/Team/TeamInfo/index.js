import React from 'react';

import {
  Container,
  InfoContainer
} from './styles';
import { resizeImgSrc } from '../../../../services/riot';

export default function TeamInfo(props) {
  const {
    code,
    name,
    src,
    result,
    flipped
  } = props;

  return (
    <Container flipped={!!flipped}>
      <img src={resizeImgSrc(180, src)} alt='' />
      <InfoContainer flipped={!!flipped}>
        {
          !!flipped ?
            (<h1>{`(${result}) ${code}`}</h1>)
            :
            (<h1>{`${code} (${result})`}</h1>)
        }
        <h2>{name}</h2>
      </InfoContainer>
    </Container>
  );
}