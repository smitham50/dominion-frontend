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
  emptyStacks: 0,
  provincesEmpty: false,

  // PLAYER 1 ARRAYS
  deck1: [],
  discard1: [],
  hand1: [],
  // PLAYER 2 ARRAYS
  deck2: [],
  discard2: [],
  hand2: [],

}

function supplyReducer(prevState=defaultState, action) {
  let shuffle = require('shuffle-array')
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
    case "DEAL1":
      return { ...prevState, deck1: shuffle([...prevState.estates.splice(0, 3).concat([...prevState.coppers.splice(0, 7)])]), estates: [...prevState.estates.slice(3)], coppers: [...prevState.coppers.slice(7)] }
    case "DEAL2":
      return { ...prevState, deck2: shuffle([...prevState.estates.splice(0, 3).concat([...prevState.coppers.splice(0, 7)])]), estates: [...prevState.estates.slice(3)], coppers: [...prevState.coppers.slice(7)] }
    case "DRAW1":
      return { ...prevState, hand1: [...prevState.deck1.splice(-5, 5)], deck1: [...prevState.deck1.slice(-5)] }
    case "DRAW2":
      return { ...prevState, hand2: [...prevState.deck2.splice(-5, 5)], deck2: [...prevState.deck2.slice(-5)] }                   
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