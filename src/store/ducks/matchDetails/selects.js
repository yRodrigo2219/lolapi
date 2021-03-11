export const selectTeam = flipped => (
  state => (
    flipped ?
      state.matchDetails.teams[1] :
      state.matchDetails.teams[0]
  )
)

export const selectGames = state => (
  state.matchDetails.games
)

export const selectIsMatchActive = matchId => (
  state => state.matchDetails.id === matchId
)

export const selectNextGameId = state => (
  state.matchDetails.nextGameId
)