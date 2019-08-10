import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerOneArea extends React.Component {

  handleClick = () => {
    this.props.deal()
    let deck = this.props.deck1
    let shuffle = require('shuffle-array')
    this.props.setDeck(shuffle(deck))
    
  }

  render() {
    console.log("DECK AFTER CLICK", this.props.deck)
    return(
      <div id="player-one-area" >
        <PlayerDiscard discard={this.props.discard} />
        <PlayerDeck deck={this.props.deck} handleClick={this.handleClick} />
        <PlayerHand hand={this.props.hand} />
      </div>
    )
  }
}

function msp(state) {
  const { gameStart } = state.game
  const { coppers, estates, deck1 } = state.supply
  const { deck, discard, hand } = state.playerOne

  return {
    gameStart: gameStart,
    coppers: coppers,
    estates: estates,
    deck: deck,
    deck1,
    discard: discard,
    hand: hand
  }

}

function mdp(dispatch) {
  return {
    deal: () => {
      dispatch({ type: "DEAL"})
    },
    setDeck: (deck) => {
      dispatch({type: "SET_DECK", payload: deck})
    }

  }
}

export default connect(msp, mdp)(PlayerOneArea) 