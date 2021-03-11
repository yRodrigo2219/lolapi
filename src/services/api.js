import axios from 'axios';

const API_KEY = '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z';
const API_URL_PERSISTED = 'https://esports-api.lolesports.com/persisted/gw';
const API_URL_LIVE = 'https://feed.lolesports.com/livestats/v1';
const LANG = 'en-US';

export async function getLeagues() {
  try {
    const res = await axios.get(`${API_URL_PERSISTED}/getLeagues`, {
      params: {
        'hl': LANG
      },
      headers: {
        'x-api-key': API_KEY
      }
    });

    return res.data.data.leagues;
  } catch (err) {
    // return await wait(5000).then(()=> getLeagues());
    return console.log(err);
  }
}

export async function getSchedule(scheduleFilter) {
  try {
    const res = await axios.get(`${API_URL_PERSISTED}/getSchedule`, {
      params: {
        'hl': LANG,
        'leagueId': scheduleFilter
      },
      headers: {
        'x-api-key': API_KEY
      }
    });

    return res.data.data.schedule;
  } catch (err) {
    // return await wait(5000).then(()=> getSchedule());
    return console.log(err);
  }
}

export async function getEventDetails(matchId) {
  try {
    const res = await axios.get(`${API_URL_PERSISTED}/getEventDetails`, {
      params: {
        'hl': LANG,
        'id': matchId
      },
      headers: {
        'x-api-key': API_KEY
      }
    });

    return res.data.data.event;
  } catch (err) {
    // return await wait(5000).then(()=> getEventDetails(matchId));
    return console.log(err);
  }
}

export async function getGameStats(gameId, isoDate) {
  try {
    const res = await axios.get(`${API_URL_LIVE}/window/${gameId}`, {
      params: {
        'startingTime': isoDate
      }
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}

export async function getInitialGameStats(gameId) {
  try {
    const res = await axios.get(`${API_URL_LIVE}/window/${gameId}`);

    return res.data;
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}

export async function getChampStats(gameId, isoDate) {
  try {
    const res = await axios.get(`${API_URL_LIVE}/details/${gameId}`, {
      params: {
        'startingTime': isoDate
      }
    });

    return res.data;
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}