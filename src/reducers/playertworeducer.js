const defaultState = {
  actions2: 1,
  buys2: 1,
  wallet2: 0,
  victoryPoints2: 3,
  turns2: 0
}

function playerTwoReducer(prevState=defaultState, action) {

  switch (action.type) {
    case "PLAY_TREASURE2":
      return { ...prevState, wallet2: prevState.wallet2 + action.payload.value }
    default:
      return prevState
  }

}

export default playerTwoReducer