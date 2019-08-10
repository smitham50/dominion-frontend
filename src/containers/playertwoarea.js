import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerTwoArea extends React.Component {

  handleClick = () => {
    let shuffle = require('shuffle-array')
    let coppers = this.props.coppers.splice(0, 7)
    let estates = this.props.estates.splice(0, 3)
    let deck = coppers.concat(estates)
    this.props.drawDeck(shuffle(deck))

  }

  render() {
    return (
      <div id="player-two-area" >
        <PlayerHand />
        <PlayerDeck deck={this.props.deck} />
        <PlayerDiscard discard={this.props.discard}/>
      </div>
    )
  }
}

function msp(state) {

  const { gameStart } = state.game
  const { coppers, estates } = state.supply
  const { deck } = state.playerTwo

  return {
    gameStart: gameStart,
    coppers: coppers,
    estates: estates,
    deck: deck
  }

}

function mdp(dispatch) {
  return {
    drawDeck: (deck) => {
      dispatch({ type: "DEAL", payload: deck })
    }
  }
}

export default connect(msp, mdp)(PlayerTwoArea) 