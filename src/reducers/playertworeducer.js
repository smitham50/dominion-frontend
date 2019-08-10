const defaultState = {
  actions2: 1,
  buys2: 1,
  wallet2: 0,
  victoryPoints2: 3,
  turns2: 0
}

function playerTwoReducer(prevState=defaultState, action) {

  switch (action.type) {
    case "DEAL":
      return { ...prevState, deck: action.payload}
    default:
      return prevState
  }

}

export default playerTwoReducer