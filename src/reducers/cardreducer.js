const defaultState = {
  isInSupply: true,
  isInDiscard: false,
  isInDeck: false,
  isInHand: false,
  isInTrash: false
}

function cardReducer(prevState = defaultState, action) {
  switch (action.type) {
    case "BUY":
      return { ...prevState, isInSupply: false, isInDiscard: true }
    case "DEAL":
      return { ...prevState, isInSupply: false, isInDeck: true }
    case "CYCLE":
      return { ...prevState, isInDiscard: false, isInDeck: true }
    case "DRAW":
      return { ...prevState, isInDeck: false, isInHand: true }
    case "PLAY":
      return { ...prevState, isInHand: false, isInDiscard: true }  
    case "SCRAP":
      return { ...prevState, isInHand: false, isInTrash: true }
    default:
      return prevState
  }

}

export default cardReducer