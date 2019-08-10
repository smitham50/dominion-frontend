const defaultState = {
  actions1: 1,
  buys1: 1,
  wallet1: 0,
  victoryPoints1: 3,
  turns1: 0
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