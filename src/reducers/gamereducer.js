const defaultState = {
  playerTurn: false,
  gameEnd: false,
}

//Player 1 turn on false, Player 2 turn on true
function gameReducer(prevState=defaultState, action) {
  switch (action.type) {
    case "TURN1":
      return { ...prevState, playerTurn: !prevState.playerTurn}
    case "TURN2":
      return { ...prevState, playerTurn: !prevState.playerTurn }
    case "END":
      return {...prevState, gameEnd: true}
    default:
      return prevState
  }

}

export default gameReducer 