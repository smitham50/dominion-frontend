const defaultState = {
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
  deck1: [],
  deck2: [],
  emptyStacks: 0,
  provincesEmpty: false
}

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
    case "COPPERS":
      return {...prevState, coppers: action.payload}
    case "SILVERS":
      return { ...prevState, silvers: action.payload }
    case "GOLDS":
      return { ...prevState, golds: action.payload }
    case "ESTATES":
      return { ...prevState, estates: action.payload }
    case "DUCHIES":
      return { ...prevState, duchies: action.payload }
    case "PROVINCES":
      return { ...prevState, provinces: action.payload }
    case "TRASH":
      return { ...prevState, trash: action.payload }  
    case "START":
      return { ...prevState, deck1: [prevState.estates.splice(0, 3), prevState.coppers.splice(0, 7)], deck2: [prevState.estates.splice(-1, 3), prevState.coppers.splice(-1, 7)] }               
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