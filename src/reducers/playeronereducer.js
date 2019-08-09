const defaultState = {
  playerTurn: false,
  actionPhase: false,
  buyPhase: false,
  cleanupPhase: false,
  actions: 1,
  buys: 1,
  wallet: 0,
  victoryPoints: 3,
  turns: 0,
  deck: [],
  discard: [],
  hand: []
}

function playerOneReducer(prevState = defaultState, action) {

  switch (action.type) {
    case "DEAL":
      return { ...prevState, deck: action.payload}
    default:
      return prevState
  }

}

export default playerOneReducer