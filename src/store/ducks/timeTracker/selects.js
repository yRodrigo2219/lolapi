export const selectNow = state => (
  state.timeTracker.now
)

export const selectDelay = state => (
  state.timeTracker.delay
)

export const selectDidDelayChange = state => (
  state.timeTracker.didDelayChange
)