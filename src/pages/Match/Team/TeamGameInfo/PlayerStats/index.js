import React from 'react';
import { useSelector } from 'react-redux';

import { getChampionImage, getItemImage } from '../../../../../services/riot';
import StatSVG, { STAT_TYPE } from '../../../../../assets/svgs/stats/index';
import { selectPatchVersion } from '../../../../../store/ducks/latestPatch/selects';
import { selectParticipant } from '../../../../../store/ducks/gameDetails/selects';
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
  const participant = useSelector(selectParticipant(player.participantId));

  if (patchVersion === '' || participant === undefined)
    return null;

  const keystoneImg = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png';
  const runeSecImg = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png';
  const champImg = getChampionImage(72, patchVersion, player.championId);
  const items = [];
  let trinket = null;

  for (let i = 0, j = 7; i < j; i++) {
    const t = participant.items[i];

    if (t !== undefined) {
      if (t === 3340 || t === 3363 || t === 3364) {
        trinket = t;
        j++;
      } else if (!items.find(item => (item.id === t))) {
        items.push({
          id: t,
          img: getItemImage(44, patchVersion, t),
        });
      } else {
        j++;
      }
    } else if (i + 1 === j && trinket) {
      items.push({
        id: trinket,
        img: getItemImage(44, patchVersion, trinket)
      });
    } else {
      items.push(null);
    }
  }

  const level = data.level;
  const name = player.summonerName;
  const currentHealth = Number.parseInt((data.currentHealth / data.maxHealth) * 100);
  const kills = data.kills;
  const deaths = data.deaths;
  const assists = data.assists;
  const cs = data.creepScore;
  const wardP = participant.wardsPlaced;
  const wardD = participant.wardsDestroyed;
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
              items.map((item, index) => (
                item === null ?
                  <img alt='' key={index} /> :
                  <img src={item.img} alt='' key={index} />
              ))
            }
          </div>
        </Bag>
      </div>
    </Container>
  )
}