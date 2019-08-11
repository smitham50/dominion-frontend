const defaultState = {
  actions1: 1,
  buys1: 1,
  wallet1: 0,
  victoryPoints1: 3,
  turns1: 0
}

function playerOneReducer(prevState = defaultState, action) {

  switch (action.type) {
    case "PLAY_TREASURE1":
      return { ...prevState, wallet1: prevState.wallet1 + action.payload.value}
    case "BUY1":
      return { ...prevState, wallet1: prevState.wallet1 - action.payload.cost, buys1: prevState.buys1 -1}
    case "TURN1":
      return { ...prevState, actions1: 1, buys1: 1, wallet1: 0, turns1: prevState.turns1++}
    default:
      return prevState
  }

}

export default playerOneReducer