export const liveMatches = state => (state.schedule.live);

export const nextMatches = state => (state.schedule.next);

export const areMatchesLoaded = state => (!state.schedule.loading);