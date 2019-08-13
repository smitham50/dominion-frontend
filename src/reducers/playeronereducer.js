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
      return { ...prevState, wallet1: prevState.wallet1 + action.payload.value }
    case "BUY1": {
      if (action.payload.card_type === "Victory") {
        return { ...prevState, wallet1: prevState.wallet1 - action.payload.cost, buys1: prevState.buys1 - 1, victoryPoints1: prevState.victoryPoints1 + action.payload.victory_points }
      }
      else {
        return { ...prevState, wallet1: prevState.wallet1 - action.payload.cost, buys1: prevState.buys1 - 1 }
      }
    }
    case "TURN1":
      return { ...prevState, actions1: 1, buys1: 1, wallet1: 0, turns1: prevState.turns1 + 1 }
    case "ACTION1": {
      if (action.payload.draw <= action.deck.length) {
        return { ...prevState, actions1: prevState.actions1 - 1 }
      } else {
        return { ...prevState }
      }
    }
    case "+1ACTION1":
      return { ...prevState, actions1: prevState.actions1 + 1 }
    case "+2ACTIONS1":
      return { ...prevState, actions1: prevState.actions1 + 2 }
    case "+1BUY1":
      return { ...prevState, buys1: prevState.buys1 + 1 }
    case "+1WALLET1":
      return { ...prevState, wallet1: prevState.wallet1 + 1 }
    case "+2WALLET1":
      return { ...prevState, wallet1: prevState.wallet1 + 2 }
    case "TRASH_REMODEL1":
      return { ...prevState, victoryPoints1: prevState.victoryPoints1 - action.payload.victory_points }
    case "GAIN_REMODEL1": {
      if (action.payload.card_type === "Victory") {
        return { ...prevState, victoryPoints1: prevState.victoryPoints1 + action.payload.victory_points }
      }
    }
    default:
      return prevState
  }

}

export default playerOneReducer