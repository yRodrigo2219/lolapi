export const selectParticipant = id => (
  state => (
    state.gameDetails.participants.find(participant => (
      participant.participantId === id
    ))
  )
)