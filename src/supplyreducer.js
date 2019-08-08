const defaultState = {
  actionCards: [],
  cellars: [],
  moats: [],
  workshops: [],
  woodcutters: [],
  villages: [],
  militias: [],
  smithies: [],
  remodels: [],
  markets: [],
  mines: [],
  coppers: [],
  silvers: [],
  golds: [],
  estates: [],
  duchies: [],
  provinces: [],
  trash: [],
  emptyStacks: 0,
  provincesEmpty: false
}


//Not sure about buy card and trash card yet. Maybe there's a better way to handle this?
function supplyReducer(prevState=defaultState, action) {

  switch (action.type) {
    case "CELLARS":
      return {...prevState, cellars: action.payload }
    case "MOATS":
      return { ...prevState, moats: action.payload }
    case "WORKSHOPS":
      return { ...prevState, workshops: action.payload }
    case "WOODCUTTERS":
      return { ...prevState, woodcutters: action.payload }  
    case "VILLAGES":
      return { ...prevState, villages: action.payload }
    case "MILITIAS":
      return { ...prevState, militias: action.payload }
    case "SMITHIES":
      return { ...prevState, smithies: action.payload }
    case "REMODELS":
      return { ...prevState, remodels: action.payload }
    case "MARKETS":
      return { ...prevState, markets: action.payload }
    case "MINES":
      return { ...prevState, mines: action.payload }        
    case "TRASH_CARD":
      return { ...prevState, trash: action.payload }
    case "STACK_EMPTY":
      return { ...prevState, emptyStacks: prevState.emptyStacks++ }
    case "PROVINCES_EMPTY":
      return { ...prevState, provincesEmpty: true }
    default:
      return prevState
  }

}

export default supplyReducer