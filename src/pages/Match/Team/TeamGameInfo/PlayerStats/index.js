import React from 'react';
import { useSelector } from 'react-redux';

import { getChampionImage } from '../../../../../services/riot';
import StatSVG, { STAT_TYPE } from '../../../../../assets/svgs/stats/index';
import { selectPatchVersion } from '../../../../../store/ducks/latestPatch/selects';
import {
  Container,
  Runes,
  Player,
  Level,
  Health,
  CreepScore,
  Bag,
} from './styles';

export default function PlayerStats({ flipped, player, data }) {
  const patchVersion = useSelector(selectPatchVersion);

  if (patchVersion === '')
    return null;

  const keystoneImg = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png';
  const runeSecImg = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png';
  const champImg = getChampionImage(72, patchVersion, player.championId);
  const itens = [
    'https://ddragon.leagueoflegends.com/cdn/11.4.1/img/item/6671.png',
    'https://ddragon.leagueoflegends.com/cdn/11.4.1/img/item/6671.png',
    null,
    null,
    null,
    null,
    null,
  ]
  const level = data.level;
  const name = player.summonerName;
  const currentHealth = Number.parseInt((data.currentHealth / data.maxHealth) * 100);
  const kills = data.kills;
  const deaths = data.deaths;
  const assists = data.assists;
  const cs = data.creepScore;
  const wardP = 0;
  const wardD = 0;
  const gold = data.totalGold;

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
            <Health hp={currentHealth} flipped={flipped}><span>{currentHealth}%</span><div></div></Health>
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