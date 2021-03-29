import axios from 'axios';

const API_KEY = '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z';
const API_URL_PERSISTED = 'https://esports-api.lolesports.com/persisted/gw';
const API_URL_LIVE = 'https://feed.lolesports.com/livestats/v1';
const LANG = 'en-US';

export async function getLeagues() {
  const res = await axios.get(`${API_URL_PERSISTED}/getLeagues`, {
    params: {
      'hl': LANG
    },
    headers: {
      'x-api-key': API_KEY
    }
  });

  return res.data.data.leagues;
}

export async function getSchedule(scheduleFilter) {
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
}

export async function getEventDetails(matchId) {
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
}

export async function getGameStats(gameId, isoDate) {
  const res = await axios.get(`${API_URL_LIVE}/window/${gameId}`, {
    params: {
      'startingTime': isoDate
    }
  });

  if (res.status === 204)
    throw new Error('Nothing to update');

  return res.data;
}

export async function getInitialGameStats(gameId) {
  const res = await axios.get(`${API_URL_LIVE}/window/${gameId}`);

  if (res.status === 204)
    throw new Error('Nothing to initialize');

  return res.data;
}

export async function getChampStats(gameId, isoDate) {
  const res = await axios.get(`${API_URL_LIVE}/details/${gameId}`, {
    params: {
      'startingTime': isoDate
    }
  });

  if (res.status === 204)
    throw new Error('Nothing to update');

  return res.data;
}