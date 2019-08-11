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
    case "TURN2":
      return { ...prevState, actions2: 1, buys2: 1, wallet2: 0, turns2: prevState.turns2++ }
    default:
      return prevState
  }

}

export default playerTwoReducer