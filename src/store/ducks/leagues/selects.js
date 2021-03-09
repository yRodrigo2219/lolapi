export const leagueImage = slug => (
  state => (
    state.leagues.data.find(league => (
      league.slug === slug
    )).image
  )
);

export const leagueFilter = state => state.leagues.filter;