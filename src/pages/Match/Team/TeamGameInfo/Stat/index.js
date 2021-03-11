import React from 'react';

import { Container } from './styles';
import StatSVG, { STAT_TYPE } from '../../../../../assets/svgs/stats';
import DrakeSVG from '../../../../../assets/svgs/stats/drakes';

export default function Stat({ content, stat, flipped, side }) {
  return (
    <Container flipped={flipped} side={side}>
      <StatSVG stat={stat} />
      {
        stat === STAT_TYPE.DRAKE ?
          <span>{content.map((drake, i) => (
            <DrakeSVG type={drake} key={i} />
          ))}</span>
          :
          <span>{content}</span>
      }
    </Container>
  );
}

export const STAT = STAT_TYPE;