import axios from 'axios';

const RESIZE_URL = 'https://am-a.akamaihd.net/image?resize=';
const DDRAGON_URL = 'https://ddragon.leagueoflegends.com';

export function resizeImgSrc(size, imgSrc) {
  return `${RESIZE_URL}${size}:&f=${imgSrc}`;
}

export async function getLatestDDragonVersion() {
  const res = await axios.get(`${DDRAGON_URL}/api/versions.json`);

  return res.data[0];
}

export async function getRunesInfo(ver) {
  const res = await axios.get(`${DDRAGON_URL}/cdn/${ver}/data/en_US/runesReforged.json`);

  return res.data;
}

export function getChampionImage(size, ver, champ) {
  const src = `${DDRAGON_URL}/cdn/${ver}/img/champion/${champ}.png`;

  return resizeImgSrc(size, src);
}

export function getItemImage(size, ver, itemId) {
  if (itemId < 7000) {
    const src = `${DDRAGON_URL}/cdn/${ver}/img/item/${itemId}.png`;

    return resizeImgSrc(size, src);
  } else {
    return `https://gol.gg/_img/ornn-items/${itemId}.png`;
  }
}

export async function getRuneImage(size, path) {
  const src = `${DDRAGON_URL}/cdn/img/${path}`;

  return resizeImgSrc(size, src);
}