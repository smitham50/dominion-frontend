import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerOneArea extends React.Component {

  handleClick = () => {
    let shuffle = require('shuffle-array')
    let coppers = this.props.coppers.splice(0, 7)
    let estates = this.props.estates.splice(0, 3)
    let deck = coppers.concat(estates)
    this.props.drawDeck(shuffle(deck))
    
  }

  render() {
    console.log("MSP", this.props.deck)
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
  const { coppers, estates } = state.supply
  const { deck, discard, hand } = state.playerOne

  return {
    gameStart: gameStart,
    coppers: coppers,
    estates: estates,
    deck: deck,
    discard: discard,
    hand: hand
  }

}

function mdp(dispatch) {
  return {
    drawDeck: (deck) => {
      dispatch({ type: "DEAL", payload: deck})
    }
  }
}

export default connect(msp, mdp)(PlayerOneArea) 