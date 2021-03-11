import axios from 'axios';

const CLOCK_URL = 'http://worldtimeapi.org/api';
const TIME_ZONE = 'timezone/Etc/UTC.json';

export async function getTime() {
  const res = await axios.get(`${CLOCK_URL}/${TIME_ZONE}`, {
    timeout: 1000,
  });

  return res.data;
}