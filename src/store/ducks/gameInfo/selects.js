export const selectActiveGame = state => (
  state.gameInfo.activeGame
)

export const selectMetadata = id => (
  state => (
    state.gameInfo.activeGame === id ?
      state.gameInfo.metadata :
      {}
  )
)

export const selectData = id => (
  state => (
    state.gameInfo.activeGame === id ?
      state.gameInfo.data :
      {}
  )
)
