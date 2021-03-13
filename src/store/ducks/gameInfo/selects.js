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

export const selectTimeNowFormatted = state => {
  const now = state.gameInfo.time.now;
  const minutes = Number.parseInt((now / 1000) / 60);
  const seconds = Number.parseInt((now / 1000) % 60);
  const date = `${minutes}:${seconds}`;

  return date;
}

export const selectPing = state => (
  state.gameInfo.requestPing
)

export const selectGameState = state => {
  let gameState = state.gameInfo.gameState;

  switch (gameState) {
    case 'finished':
      gameState = 'Finished';
      break;
    case 'unstarted':
      gameState = 'Unstarted';
      break;
    case 'in_game':
      gameState = 'Playing';
      break;
    case 'paused':
      gameState = 'Paused';
      break;
    default:
      gameState = 'API ERROR';
  }

  return gameState;
}