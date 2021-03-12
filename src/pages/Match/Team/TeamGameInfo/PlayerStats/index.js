import React from 'react';

import StatSVG, { STAT_TYPE } from '../../../../../assets/svgs/stats/index';
import {
  Container,
  Runes,
  Player,
  Level,
  Health,
  CreepScore,
  Bag,
} from './styles';

export default function PlayerStats({ flipped }) {
  const keystoneImg = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png';
  const runeSecImg = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png';
  const champImg = 'https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/Gragas.png';
  const itens = [
    'https://ddragon.leagueoflegends.com/cdn/11.4.1/img/item/6671.png',
    'https://ddragon.leagueoflegends.com/cdn/11.4.1/img/item/6671.png',
    null,
    null,
    null,
    null,
    null,
  ]
  const level = 16;
  const name = 'FLY Josedeodo';
  const currentHeath = 85;
  const kills = 12;
  const deaths = 15;
  const assists = 10;
  const cs = 178;
  const wardP = 42;
  const wardD = 28;
  const gold = 15487;

  return (
    <Container flipped={flipped}>
      <div>
        <Runes>
          <span><img src={keystoneImg} alt='' /></span>
          <img src={runeSecImg} alt='' />
        </Runes>
        <Player flipped={flipped}>
          <img src={champImg} alt='' />
          <Level>{level}</Level>
          <span>
            <h2>{name}</h2>
            <Health hp={currentHeath} flipped={flipped}><span>{currentHeath}%</span><div></div></Health>
            <span>{`${kills} / ${deaths} / ${assists}`}</span>
          </span>
        </Player>
      </div>
      <div>
        <CreepScore>
          <div>
            <span>{cs}</span>
            <StatSVG />
          </div>
          <span>{`( ${wardP} / ${wardD} )`}</span>
        </CreepScore>
      </div>
      <div>
        <Bag flipped={flipped}>
          <span>
            <span>{gold}</span>
            <StatSVG stat={STAT_TYPE.COIN} />
          </span>
          <div>
            {
              itens.map((item, index) => <img src={item} alt='' key={index} />)
            }
          </div>
        </Bag>
      </div>
    </Container>
  )
}