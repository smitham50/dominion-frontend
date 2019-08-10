import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerOneArea extends React.Component {

  handleDeal = () => {
    this.props.deal()
  }

  handleDraw = () => {
    this.props.draw()
  }

  componentDidUpdate() {
    console.log("UPDATED")
  }

  render() {
    let shuffle = require('shuffle-array')
    return(
      <div id="player-one-area" >
        <PlayerDiscard discard={this.props.discard1} />
        <PlayerDeck key="deck1" deck={shuffle(this.props.deck1)} handleDeal={this.handleDeal} />
        <PlayerHand key="hand1" hand={this.props.hand1} handleDraw={this.handleDraw} />
      </div>
    )
  }
}

function msp(state) {
  const { coppers, estates, deck1, discard1, hand1 } = state.supply
  const {  } = state.playerOne

  return {
    coppers: coppers,
    estates: estates,
    deck1: deck1,
    discard1: discard1,
    hand1: hand1
  }

}

function mdp(dispatch) {
  return {
    deal: () => {
      dispatch({ type: "DEAL1"})
    },
    draw: () => {
      dispatch({ type: "DRAW1" })
    }

  }
}

export default connect(msp, mdp)(PlayerOneArea) 