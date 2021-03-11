export const selectActiveGame = state => (
  state.gameInfo.activeGame
)

export const selectIsGameLoading = state => (
  state.gameInfo.loading
)

export const selectMetadata = state => (
  state.gameInfo.metadata
)

export const selectData = state => (
  state.gameInfo.data
)
export const selectTeamParticipants = teamId => (
  state => (
    state.gameInfo.metadata.blueTeamMetadata.esportsTeamId === teamId ?
      state.gameInfo.metadata.blueTeamMetadata.participantMetadata :
      state.gameInfo.metadata.redTeamMetadata.participantMetadata
  )
)

export const selectTeamSide = teamId => (
  state => (
    state.gameInfo.metadata.blueTeamMetadata.esportsTeamId === teamId ?
      'blueTeam' : 'redTeam'
  )
)

export const selectTeamData = side => (
  state => (
    state.gameInfo.data[side]
  )
)
