const defaultState = {
  supplyCards: [],
  treasureCards: [],
  victoryCards: [],
  trash: [],
  emptyStacks: 0,
  provincesEmpty: false
}


//Not sure about buy card and trash card yet. Maybe there's a better way to handle this?
function turnReducer(prevState = defaultState, action) {

  switch (action.type) {
    case "BUY_CARD":
      return { ...prevState,  }
    case "TRASH_CARD":
      return { ...prevState,  }
    case "STACK_EMPTY":
      return { ...prevState, emptyStacks: prevState.emptyStacks++ }
    case "PROVINCES_EMPTY":
      return { ...prevState, provincesEmpty: true }
    default:
      return prevState
  }

}