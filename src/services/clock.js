import axios from 'axios';

const CLOCK_URL = 'http://worldtimeapi.org/api';
const TIME_ZONE = 'timezone/Etc/UTC.json';

export async function getTime() {
  try {
    const res = await axios.get(`${CLOCK_URL}/${TIME_ZONE}`);

    return res.data;
  } catch (err) {
    // return await wait(5000).then(()=> getLeagues());
    return console.log(err);
  }
}