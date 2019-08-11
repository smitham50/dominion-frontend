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
    case "BUY2":
      return { ...prevState, wallet2: prevState.wallet2 - action.payload.cost, buys2: prevState.buys2 - 1 }
    case "TURN2":
      return { ...prevState, actions2: 1, buys2: 1, wallet2: 0, turns2: prevState.turns2 + 1 }
    case "ACTION2":
      return { ...prevState, actions2: prevState.actions2 - 1 }
    case "+1ACTION2":
      return { ...prevState, actions2: prevState.actions2 + 1 }
    case "+2ACTIONS2":
      return { ...prevState, actions2: prevState.actions2 + 2 }
    case "+1BUY2":
      return { ...prevState, buys2: prevState.buys2 + 1 }
    case "+1WALLET2":
      return { ...prevState, wallet2: prevState.wallet2 + 1 }
    case "+2WALLET2":
      return { ...prevState, wallet2: prevState.wallet2 + 2 }
    default:
      return prevState
  }

}

export default playerTwoReducer