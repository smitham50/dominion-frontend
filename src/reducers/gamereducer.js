const defaultState = {
  playerTurn: false,
  gameEnd: false,
  cards: []
}

//Player 1 turn on false, Player 2 turn on true
function gameReducer(prevState=defaultState, action) {
  console.log("REDUCER ACTION", action)
  switch (action.type) {
    case "TURN":
      return { ...prevState, playerTurn: !prevState.playerTurn}
    case "END":
      return {...prevState, gameEnd: true}
    case "CARDS":
      return {...prevState, cards: action.payload}
    default:
      return prevState
  }

}

export default gameReducer