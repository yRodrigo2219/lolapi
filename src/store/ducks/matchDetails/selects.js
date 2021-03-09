export const selectTeams = id => (
  state => (
    state.matchDetails.id === id ?
      state.matchDetails.teams :
      []
  )
)

export const selectGames = id => (
  state => (
    state.matchDetails.id === id ?
      state.matchDetails.games :
      []
  )
)
