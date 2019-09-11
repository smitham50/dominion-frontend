const defaultState = {
// PLAYER 1 TURN ON FALSE, PLAYER 2 TURN ON TRUE
  isHovered: false,
  hoverCard: null,
  playerTurn: false,
  mine: false,
  remodel: false,
  remodelGain: false,
  remodelValue: 0,
  workshop: false,
  workshopGain: false,
  militia: false,
  militiaDiscardFirst: false,
  militiaDiscardSecond: false,
  cellar1: false,
  cellar2: false,
  cellarHand: [],
  gameStart1: false,
  gameStart2: false,

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
  emptyPiles: 0,
  gameEnd: false,

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
    case "TRASH": {
      return { ...prevState, trash: prevState.trash.concat(action.payload) }
    }
    // PLAYER ACTIONS  
    case "TURN1": {
      let endHand = [...prevState.hand1]
      if (prevState.deck1.length >= 5) {
        return { 
          ...prevState, 
          playerTurn: !prevState.playerTurn, 
          discard1: prevState.discard1.concat(endHand), 
          hand1: [...prevState.deck1.slice(-5)], 
          deck1: [...prevState.deck1.slice(0, -5)],
          mine: false, 
          remodel: false, 
          remodelGain: false, 
          workshop: false, 
          workshopGain: false, 
          militia: false, 
          militiaDefend: false, 
          militiaDiscardFirst: false, 
          militiaDiscardSecond: false, 
          cellar1: false 
        }
      } else if (prevState.deck1.length < 5) {
        let endDiscard = [...prevState.discard1.concat(endHand)]
        let shuffleDeck = shuffle([...prevState.deck1.concat(endDiscard)])
        return {
          ...prevState,
          playerTurn: !prevState.playerTurn,
          discard1: [],
          hand1: [...shuffleDeck.slice(-5)],
          deck1: [...shuffleDeck.slice(0, -5)],
          mine: false,
          remodel: false,
          remodelGain: false,
          workshop: false,
          workshopGain: false,
          militia: false,
          militiaDefend: false,
          militiaDiscardFirst: false,
          militiaDiscardSecond: false,
          cellar1: false 
        }
      }
    }
    case "TURN2": {
      let endHand = [...prevState.hand2]
      if (prevState.deck2.length >= 5) {
        return { 
          ...prevState, 
          playerTurn: !prevState.playerTurn, 
          discard2: prevState.discard2.concat(endHand), 
          hand2: [...prevState.deck2.slice(-5)], 
          deck2: [...prevState.deck2.slice(0, -5)],
          mine: false, 
          remodel: false, 
          remodelGain: false, 
          workshop: false, 
          workshopGain: false, 
          militia: false, 
          militiaDefend: false, 
          militiaDiscardFirst: false, 
          militiaDiscardSecond: false, 
          cellar2: false,
          cellarHand: [] 
        }
      } else if (prevState.deck2.length < 5) {
        let endDiscard = [...prevState.discard2.concat(endHand)]
        let shuffleDeck = shuffle([...prevState.deck2.concat(endDiscard)])
        return {
          ...prevState,
          playerTurn: !prevState.playerTurn,
          discard2: [],
          hand2: [...shuffleDeck.slice(-5)],
          deck2: [...shuffleDeck.slice(0, -5)],
          mine: false,
          remodel: false,
          remodelGain: false,
          workshop: false,
          workshopGain: false,
          militia: false,
          militiaDefend: false,
          militiaDiscardFirst: false,
          militiaDiscardSecond: false,
          cellar2: false,
          cellarHand: [] 
        }
      }
    }
    case "PLAY_TREASURE1":
      return {...prevState, discard1: prevState.discard1.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id) }
    case "PLAY_TREASURE2":
      return { ...prevState, discard2: prevState.discard2.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id) }
    case "BUY1": {
      let pile = Object.keys(prevState).find(key => key == `${action.payload.name.toLowerCase()}s`)
      if (prevState[pile].length > 1 && pile !== "provinces") {
        return { ...prevState, discard1: prevState.discard1.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id) }
      } else if (prevState[pile].length === 1 && pile !== "provinces") {
        if (prevState.emptyPiles < 2) {
          return { ...prevState, discard1: prevState.discard1.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id), emptyPiles: prevState.emptyPiles + 1 }
        } else {
          return { ...prevState, discard1: prevState.discard1.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id), gameEnd: true }
        }
      } else if (pile === "provinces") {
        if (prevState[pile].length > 1) {
          return { ...prevState, discard1: prevState.discard1.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id) }
        } else {
            return { ...prevState, discard1: prevState.discard1.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id), gameEnd: true }
          }
      } 
    }
    case "BUY2": {
      let pile = Object.keys(prevState).find(key => key == `${action.payload.name.toLowerCase()}s`)
      if (prevState[pile].length > 1 && pile !== "provinces") {
        return { ...prevState, discard2: prevState.discard2.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id) }   
      } else if (prevState[pile].length === 1 && pile !== "provinces") {
        if (prevState.emptyPiles < 3) {
          return { ...prevState, discard2: prevState.discard2.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id), emptyPiles: prevState.emptyPiles + 1 }   
        } else {
          return { ...prevState, discard2: prevState.discard2.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id), gameEnd: true }   
        }
      } else if (pile === "provinces") {
        if (prevState[pile].length > 1) {
          return { ...prevState, discard2: prevState.discard2.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id) }   
        } else {
          return { ...prevState, discard2: prevState.discard2.concat(action.payload), [pile]: prevState[pile].filter(card => card.id !== action.payload.id), gameEnd: true }   
        }
      }
    }
    case "ACTION1": 
        return { ...prevState, discard1: prevState.discard1.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id) }
    case "ACTION2": 
        return { ...prevState, discard2: prevState.discard2.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id) }
    case "TRASH_TREASURE1": {
      let pile = action.treasure
      return { ...prevState, trash: prevState.trash.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id).concat(prevState[pile].slice(-1)), [pile]: prevState[pile].slice(0, -1), mine: false }  
    }
    case "TRASH_TREASURE2": {
      let pile = action.treasure
      return { ...prevState, trash: prevState.trash.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id).concat(prevState[pile].slice(-1)), [pile]: prevState[pile].slice(0, -1), mine: false }  
    }
    case "TRASH_REMODEL1": {
      return { ...prevState, remodel: false, remodelGain: true, trash: prevState.trash.concat(action.payload), hand1: prevState.hand1.filter(card => card.id !== action.payload.id), remodelValue: action.payload.cost + 2  }
    }
    case "TRASH_REMODEL2": {
      return { ...prevState, remodel: false, remodelGain: true, trash: prevState.trash.concat(action.payload), hand2: prevState.hand2.filter(card => card.id !== action.payload.id), remodelValue: action.payload.cost + 2 }
    }
    case "GAIN_REMODEL1": {
      let pile = `${action.payload.name.toLowerCase()}s`
      return { ...prevState, remodelGain: false, [pile]: prevState[pile].slice(0, -1), discard1: prevState.discard1.concat(prevState[pile].slice(-1)) }
    }
    case "GAIN_REMODEL2": {
      let pile = `${action.payload.name.toLowerCase()}s`
      return { ...prevState, remodelGain: false, [pile]: prevState[pile].slice(0, -1), discard2: prevState.discard2.concat(prevState[pile].slice(-1)) }
    }
    case "GAIN_WORKSHOP1": {
      let pile = `${action.payload.name.toLowerCase()}s`
      return { ...prevState, workshop: false, [pile]: prevState[pile].slice(0, -1), discard1: prevState.discard1.concat(prevState[pile].slice(-1)) }
    }
    case "GAIN_WORKSHOP2": {
      let pile = `${action.payload.name.toLowerCase()}s`
      return { ...prevState, workshop: false, [pile]: prevState[pile].slice(0, -1), discard2: prevState.discard2.concat(prevState[pile].slice(-1)) }
    }
    case "MILITIA_DISCARD_FIRST1": {
      return { ...prevState, militia: false, militiaDiscardFirst: false, militiaDiscardSecond: true, hand2: prevState.hand2.filter(card => card.id !== action.payload.id), discard2: prevState.discard2.concat(action.payload) }
    }
    case "MILITIA_DISCARD_FIRST2": {
      return { ...prevState, militia: false, militiaDiscardFirst: false, militiaDiscardSecond: true, hand1: prevState.hand1.filter(card => card.id !== action.payload.id), discard1: prevState.discard1.concat(action.payload) }
    }
    case "MILITIA_DISCARD_SECOND1": {
      return { ...prevState, militiaDiscardSecond: false, hand2: prevState.hand2.filter(card => card.id !== action.payload.id), discard2: prevState.discard2.concat(action.payload) }
    }
    case "MILITIA_DISCARD_SECOND2": {
      return { ...prevState, militiaDiscardSecond: false, hand1: prevState.hand1.filter(card => card.id !== action.payload.id), discard1: prevState.discard1.concat(action.payload) }
    }
    case "MILITIA_DEFEND1": {
      return { ...prevState, militia: false, militiaDiscardFirst: false, militiaDiscardSecond: false, hand2: prevState.hand2.filter(card => card.id !== action.payload.id), discard2: prevState.discard2.concat(action.payload) }
    }
    case "MILITIA_DEFEND2": {
      return { ...prevState, militia: false, militiaDiscardFirst: false, militiaDiscardSecond: false, hand1: prevState.hand1.filter(card => card.id !== action.payload.id), discard1: prevState.discard1.concat(action.payload) }
    }
    case "MILITIA_BREAK": {
      return { ...prevState, militia: false, militiaDiscardFirst: false, militiaDiscardSecond: false }
    }
    case "DEAL1":
      return { ...prevState, deck1: shuffle(prevState.estates.slice(-3).concat(prevState.coppers.slice(-7))), estates: prevState.estates.slice(0, -3), coppers: prevState.coppers.slice(0, -7) }
    case "DEAL2":
      return { ...prevState, deck2: shuffle(prevState.estates.slice(-3).concat(prevState.coppers.slice(-7))), estates: prevState.estates.slice(0, -3), coppers: prevState.coppers.slice(0, -7) }
    case "CYCLE1": {
        return { ...prevState, deck1: shuffle(prevState.discard1), discard1: [] }
    }
    case "CYCLE2": {
        return { ...prevState, deck2: shuffle(prevState.discard2), discard2: [] }
    }
    case "DRAW1": {
      if (prevState.deck1.length >= 5) {
        return { ...prevState, hand1: prevState.deck1.slice(-5), deck1: prevState.deck1.slice(0, -5), gameStart1: true }
      } else {
        return { ...prevState, deck1: shuffle(prevState.deck1.concat(prevState.discard1)), discard1: [] }
      }
    }
    case "DRAW2":
      if (prevState.deck2.length >= 5) {
        return { ...prevState, hand2: prevState.deck2.slice(-5), deck2: prevState.deck2.slice(0, -5), gameStart2: true }
      } else {
        return { ...prevState, deck2: shuffle(prevState.deck2.concat(prevState.discard2)), discard2: [] }
      }
    case "CELLAR_DISCARD1": {
      if (prevState.cellarHand.includes(action.payload)) {
        if (prevState.deck1.length >= 1) {
          return { 
            ...prevState, 
            hand1: prevState.hand1.filter(card => card.id !== action.payload.id).concat(prevState.deck1.slice(-1)), 
            discard1: prevState.discard1.concat(action.payload), 
            deck1: prevState.deck1.slice(0, -1) 
          }
        } else {
            let cycleHand = prevState.hand1.filter(card => card.id !== action.payload.id)
            let cycleDiscard = prevState.discard1.concat(action.payload)
            let shuffleDeck = shuffle(cycleDiscard)
            return {
              ...prevState,
              hand1: cycleHand.concat(shuffleDeck.slice(-1)),
              deck1: shuffleDeck.slice(0, -1),
              discard1: []
          }
        }
      } else {
        return {
          ...prevState
        }
      }
    }
    case "CELLAR_DISCARD2": {
      if (prevState.cellarHand.includes(action.payload)) {
        if (prevState.deck2.length >= 1) {
          return { 
            ...prevState, 
            hand2: prevState.hand2.filter(card => card.id !== action.payload.id).concat(prevState.deck2.slice(-1)), 
            discard2: prevState.discard2.concat(action.payload), 
            deck2: prevState.deck2.slice(0, -1) 
          }
        } else {
            let cycleHand = prevState.hand2.filter(card => card.id !== action.payload.id)
            let cycleDiscard = prevState.discard2.concat(action.payload)
            let shuffleDeck = shuffle(cycleDiscard) 
            return {
              ...prevState,
              hand2: cycleHand.concat(shuffleDeck.slice(-1)),
              deck2: shuffleDeck.slice(0, -1),
              discard2: []
          }
        }
      } else {
        return {
          ...prevState
        }
      }
    }
    case "END_CELLAR1":
      return { ...prevState, cellar1: false }
    case "END_CELLAR2":
      return { ...prevState, cellar2: false }
    // CARD TRIGGERS
    case "+1CARD1": {
      if (prevState.deck1.length > 0) {
        return { 
          ...prevState, 
          hand1: prevState.hand1.concat(prevState.deck1.slice(-1)), 
          deck1: prevState.deck1.slice(0, -1) 
        }
      } else {
        let shuffleDeck = shuffle(prevState.discard1)
        return { 
          ...prevState,
          hand1: prevState.hand1.concat(shuffleDeck.slice(-1)), 
          deck1: shuffleDeck.slice(0, -1), 
          discard1: [] 
        }
      }
    }
    case "+2CARDS1": {
      if (prevState.deck1.length > 1) {
        return { 
          ...prevState, 
          hand1: prevState.hand1.concat(prevState.deck1.slice(-2)), 
          deck1: prevState.deck1.slice(0, -2) 
        }
      } else {
        let shuffleDeck = shuffle(prevState.discard1)
        return {
          ...prevState,
          hand1: prevState.hand1.concat(shuffleDeck.slice(-2)),
          deck1: shuffleDeck.slice(0, -2),
          discard1: []
        }
      }
    }
    case "+3CARDS1": {
      if (prevState.deck1.length > 2) {
        return { 
          ...prevState, 
          hand1: prevState.hand1.concat(prevState.deck1.slice(-3)), 
          deck1: prevState.deck1.slice(0, -3) 
        }
      } else {
        let shuffleDeck = shuffle(prevState.discard1)
        return {
          ...prevState,
          hand1: prevState.hand1.concat(shuffleDeck.slice(-3)),
          deck1: shuffleDeck.slice(0, -3),
          discard1: []
        }
      }
    }
    case "+1CARD2": {
      if (prevState.deck2.length > 0) {
        return { 
          ...prevState, 
          hand2: prevState.hand2.concat(prevState.deck2.slice(-1)), 
          deck2: prevState.deck2.slice(0, -1) 
        }
      } else {
        let shuffleDeck = shuffle(prevState.discard2)
        return {
          ...prevState,
          hand2: prevState.hand2.concat(shuffleDeck.slice(-1)),
          deck2: shuffleDeck.slice(0, -1),
          discard2: []
        }
      }
    }
    case "+2CARDS2": {
      if (prevState.deck2.length > 1) {
        return { 
          ...prevState, 
          hand2: prevState.hand2.concat(prevState.deck2.slice(-2)), 
          deck2: prevState.deck2.slice(0, -2) 
        }
      } else {
        let shuffleDeck = shuffle(prevState.discard2)
        return {
          ...prevState,
          hand2: prevState.hand2.concat(shuffleDeck.slice(-2)),
          deck2: shuffleDeck.slice(0, -2),
          discard2: []
        }
      }
    }
    case "+3CARDS2": {
      if (prevState.deck2.length > 2) {
        return { 
          ...prevState, 
          hand2: prevState.hand2.concat(prevState.deck2.slice(-3)), 
          deck2: prevState.deck2.slice(0, -3) 
        }
      } else {
        let shuffleDeck = shuffle(prevState.discard2)
        return {
          ...prevState,
          hand2: prevState.hand2.concat(shuffleDeck.slice(-3)),
          deck2: shuffleDeck.slice(0, -3),
          discard2: []
        }
      }
    }
    case "MINE1": {
      if (prevState.hand1.some(card => card.name === "Copper" || card.name === "Silver")) {
        return { ...prevState, mine: true }
      } else {
        return {
          ...prevState
        }
      }
    }
    case "MINE2": {
      if (prevState.hand2.some(card => card.name === "Copper" || card.name === "Silver")) {
        return { ...prevState, mine: true }
      } else {
        return {
          ...prevState
        }
      }
    }
    case "REMODEL1": {
      if (prevState.hand1.length > 0) {
        return { ...prevState, remodel: true }
      } else {
        return {
          ...prevState
        }
      }
    }
    case "REMODEL2": {
      if (prevState.hand2.length > 0) {
        return { ...prevState, remodel: true}
      } else {
        return {
          ...prevState
        }
      }
    }
    case "WORKSHOP1":
      return { ...prevState, workshop: true }
    case "WORKSHOP2":
      return { ...prevState, workshop: true }
    case "ATTACK1": {
      if (prevState.hand2.length > 3) {
        return { ...prevState, militia: true, militiaDiscardFirst: true }
      } else {
        return { ...prevState }
      }
    }
    case "ATTACK2": {
      if (prevState.hand1.length > 3) {
        return { ...prevState, militia: true, militiaDiscardFirst: true }
      } else {
        return { ...prevState }
      }
      }
    case "CELLAR1":
      return { ...prevState, cellar1: true, cellarHand: [...prevState.hand1] }
    case "CELLAR2":
      return { ...prevState, cellar2: true, cellarHand: [...prevState.hand2] }
    case "HOVER_ON":
      return { ...prevState, isHovered: true, hoverCard: action.payload }
    case "HOVER_OFF":
      return { ...prevState, isHovered: false, hoverCard: action.payload }
    default:
      return prevState
  }

}

export default supplyReducer 