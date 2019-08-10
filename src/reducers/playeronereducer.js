const defaultState = {
  actions: 1,
  buys: 1,
  wallet: 0,
  victoryPoints: 3,
  turns: 0
}

function playerOneReducer(prevState = defaultState, action) {

  switch (action.type) {
    case "SET_DECK":
      return { ...prevState, deck: action.payload }
    default:
      return prevState
  }

}

export default playerOneReducer