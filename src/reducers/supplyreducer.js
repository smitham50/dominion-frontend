const defaultState = {
// PLAYER 1 TURN ON FALSE, PLAYER 2 TURN ON TRUE
  playerTurn: false,
  mine: false,

  cellars: [],
  moats: [],
  workshops: [],
  woodcutters: [],
  villages: [],
  militias: [],
  smithys: [],
  remodels: [],
  markets: [],
  mines: [],
  coppers: [],
  silvers: [],
  golds: [],
  estates: [],
  duchys: [],
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
  hand2: []

}

function supplyReducer(prevState=defaultState, action) {
  let shuffle = require('shuffle-array')
  switch (action.type) {
    // INITIAL SUPPLY RENDER
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
    case "SMITHYS":
      return { ...prevState, smithys: action.payload }
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
    case "DUCHYS":
      return { ...prevState, duchys: action.payload }
    case "PROVINCES":
      return { ...prevState, provinces: action.payload }
    case "TRASH":
      return { ...prevState, trash: prevState.trash.concat(action.payload) }
    // PLAYER ACTIONS  
    case "TURN1":
      return { ...prevState, playerTurn: !prevState.playerTurn, discard1: prevState.discard1.concat(prevState.hand1), hand1: [] }
    case "TURN2":
      return { ...prevState, playerTurn: !prevState.playerTurn, discard2: prevState.discard2.concat(prevState.hand2), hand2: [] }
    case "PLAY_TREASURE1":
      return {...prevState, discard1: prevState.discard1.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id) }
    case "PLAY_TREASURE2":
      return { ...prevState, discard2: prevState.discard2.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id) }
    case "BUY1": {
      let pile = Object.keys(prevState).find(key => key == `${action.payload.name.toLowerCase()}s`)
      return { ...prevState, discard1: prevState.discard1.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id) }
    }
    case "BUY2": {
      let pile = Object.keys(prevState).find(key => key == `${action.payload.name.toLowerCase()}s`)
      return { ...prevState, discard2: prevState.discard2.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id) }   
    }
    case "ACTION1": {
      if (action.payload.draw <= prevState.deck1.length) {
        return { ...prevState, discard1: prevState.discard1.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id) }
      } else {
        return { ...prevState }
      }
    }
    case "ACTION2": {
      if (action.payload.draw <= prevState.deck2.length) {
        return { ...prevState, discard2: prevState.discard2.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id) }
      } else {
        return { ...prevState }
      }
    }
    case "TRASH_TREASURE1": {
      let pile = action.treasure
      return { ...prevState, trash: prevState.trash.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id).concat(prevState[pile].slice(-1)), [pile]: prevState[pile].slice(0, -1), mine: false }  
    }
    case "TRASH_TREASURE2": {
      let pile = action.treasure
      return { ...prevState, trash: prevState.trash.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id).concat(prevState[pile].slice(-1)), [pile]: prevState[pile].slice(0, -1), mine: false }  
    }
    case "DEAL1":
      return { ...prevState, deck1: shuffle(prevState.estates.slice(-3).concat(prevState.coppers.slice(-7))), estates: prevState.estates.slice(0, -3), coppers: prevState.coppers.slice(0, -7) }
    case "DEAL2":
      return { ...prevState, deck2: shuffle(prevState.estates.slice(-3).concat(prevState.coppers.slice(-7))), estates: prevState.estates.slice(0, -3), coppers: prevState.coppers.slice(0, -7) }
    case "CYCLE1":
      return { ...prevState, deck1: shuffle(prevState.discard1), discard1: [] }
      case "CYCLE2":
      return { ...prevState, deck2: shuffle(prevState.discard2), discard2: [] }
    case "DRAW1": {
      if (prevState.deck1.length >= 5) {
        return { ...prevState, hand1: prevState.deck1.slice(-5), deck1: prevState.deck1.slice(0, -5) }
      } else {
        return { ...prevState, deck1: shuffle(prevState.deck1.concat(prevState.discard1)), discard1: [] }
      }
    }
    case "DRAW2":
      if (prevState.deck2.length >= 5) {
        return { ...prevState, hand2: prevState.deck2.slice(-5), deck2: prevState.deck2.slice(0, -5) }
      } else {
        return { ...prevState, deck2: shuffle(prevState.deck2.concat(prevState.discard2)), discard2: [] }
      }
    case "STACK_EMPTY":
      return { ...prevState, emptyStacks: prevState.emptyStacks + 1 }
    case "PROVINCES_EMPTY":
      return { ...prevState, provincesEmpty: true }
    // CARD TRIGGERS
    case "+1CARD1": {
      if (prevState.deck1.length > 0) {
        return { ...prevState, hand1: prevState.hand1.concat(prevState.deck1.slice(-1)), deck1: prevState.deck1.slice(0, -1) }
      } else {
        return { ...prevState, deck1: shuffle(prevState.deck1.concat(prevState.discard1)), discard1: [] }
      }
    }
    case "+2CARDS1": {
      if (prevState.deck1.length > 1) {
        return { ...prevState, hand1: prevState.hand1.concat(prevState.deck1.slice(-2)), deck1: prevState.deck1.slice(0, -2) }
      } else {
        return { ...prevState, deck1: shuffle(prevState.deck1.concat(prevState.discard1)), discard1: [] }
      }
    }
    case "+3CARDS1": {
      if (prevState.deck1.length > 2) {
        return { ...prevState, hand1: prevState.hand1.concat(prevState.deck1.slice(-3)), deck1: prevState.deck1.slice(0, -3) }
      } else {
        return { ...prevState, deck1: shuffle(prevState.deck1.concat(prevState.discard1)), discard1: [] }
      }
    }
    case "+1CARD2": {
      if (prevState.deck2.length > 0) {
        return { ...prevState, hand2: prevState.hand2.concat(prevState.deck2.slice(-1)), deck2: prevState.deck2.slice(0, -1) }
      } else {
        return { ...prevState, deck2: shuffle(prevState.deck2.concat(prevState.discard2)), discard2: [] }
      }
    }
    case "+2CARDS2": {
      if (prevState.deck2.length > 1) {
        return { ...prevState, hand2: prevState.hand2.concat(prevState.deck2.slice(-2)), deck2: prevState.deck2.slice(0, -2) }
      } else {
        return { ...prevState, deck2: shuffle(prevState.deck2.concat(prevState.discard2)), discard2: [] }
      }
    }
    case "+3CARDS2": {
      if (prevState.deck2.length > 2) {
        return { ...prevState, hand2: prevState.hand2.concat(prevState.deck2.slice(-3)), deck2: prevState.deck2.slice(0, -3) }
      } else {
        return { ...prevState, deck2: shuffle(prevState.deck2.concat(prevState.discard2)), discard2: [] }
      }
    }
    case "MINE1": {
      return { ...prevState, mine: true }
    }
    case "MINE2": {
      return { ...prevState, mine: true }
    }
    

    default:
      return prevState
  }

}

export default supplyReducer 