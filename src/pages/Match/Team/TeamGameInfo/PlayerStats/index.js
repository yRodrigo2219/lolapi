import React from 'react';
import { useSelector } from 'react-redux';

import { getChampionImage, getItemImage, getRuneImage } from '../../../../../services/riot';
import StatSVG, { STAT_TYPE } from '../../../../../assets/svgs/stats/index';
import {
  selectPatchVersion,
  selectIsLoading,
  selectKeystonePath,
  selectSubstylePath,
} from '../../../../../store/ducks/riotInfo/selects';
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

export default function PlayerStats({ flipped, data, metadata }) {
  const isLoading = useSelector(selectIsLoading);
  const patchVersion = useSelector(selectPatchVersion);
  const details = useSelector(selectParticipant(metadata.participantId));

  const runes = {
    styleId: -1,
    subStyleId: -1,
    keystoneId: -1,
  };

  if (details !== undefined) {
    runes.styleId = details.perkMetadata.styleId;
    runes.subStyleId = details.perkMetadata.subStyleId;
    runes.keystoneId = details.perkMetadata.perks[0];
  }

  const keystonePath = useSelector(selectKeystonePath(runes.styleId, runes.keystoneId));
  const substylePath = useSelector(selectSubstylePath(runes.subStyleId));

  if (isLoading || details === undefined)
    return null;

  const keystoneImg = getRuneImage(32, keystonePath);
  const runeSecImg = getRuneImage(24, substylePath);
  const champImg = getChampionImage(72, patchVersion, metadata.championId);
  const items = [];
  let trinket = null;

  // Organizing Inventory
  for (let i = 0, j = 7; i < j; i++) {
    const t = details.items[i];

    if (t !== undefined) {
      if (t === 3340 || t === 3363 || t === 3364) { // is a trinket?
        trinket = t;
        j++;
      } else {
        const item = items.find(item => (item.id === t));

        if (item) { // is already in the inventory?
          item.qnt++;
          j++;
        } else if (t !== 2138 && t !== 2139 && t !== 2140) { // is not an elixir?
          items.push({
            id: t,
            img: getItemImage(40, patchVersion, t),
            qnt: 1,
          });
        } else {
          j++;
        }
      }
    } else if (i + 1 === j && trinket) { // when loop reaches last slot + has a trinket
      items.push({
        id: trinket,
        img: getItemImage(40, patchVersion, trinket),
        qnt: 1,
      });
    } else {
      items.push(null);
    }
  }

  const level = data.level;
  const name = metadata.summonerName;
  const currentHealth = Number.parseInt((data.currentHealth / data.maxHealth) * 100);
  const kills = data.kills;
  const deaths = data.deaths;
  const assists = data.assists;
  const cs = data.creepScore;
  const wardP = details.wardsPlaced;
  const wardD = details.wardsDestroyed;
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
          <div id='extragold'>
            <span>{gold}</span>
            <StatSVG stat={STAT_TYPE.COIN} />
          </div>
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
                <label key={index}>
                  {
                    item === null ?
                      <img src='../imgs/emptyItem.png' alt='' /> :
                      <img src={item.img} alt='' />
                  }
                  {
                    item?.qnt > 1 ?
                      <span>x{item.qnt}</span> :
                      null
                  }
                </label>
              ))
            }
          </div>
        </Bag>
      </div>
    </Container>
  )
}