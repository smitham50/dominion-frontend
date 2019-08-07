const defaultState = {
  actionPhase: false,
  buyPhase: false,
  cleanupPhase: false
}

function turnReducer(prevState=defaultState, action) {

  switch (action.type) {
    case "ACTION_PHASE":
      return { ...prevState, actionPhase: true, cleanupPhase: false }
    case "BUY_PHASE":
      return { ...prevState, buyPhase: true, actionPhase: false }
    case "CLEANUP_PHASE":
      return { ...prevState, cleanupPhase: true, buyPhase: false }
    default:
      return prevState
  }

}

export default turnReducer