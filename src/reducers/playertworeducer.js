const defaultState = {
  playerTurn: false,
  actions: 1,
  buys: 1,
  wallet: 0,
  victoryPoints: 3,
  turns: 0,
  deck: [],
  discard: [],
  hand: []
}

function playerTwoReducer(prevState=defaultState, action) {

  switch (action.type) {

    default:
      return prevState
  }

}

export default playerTwoReducer