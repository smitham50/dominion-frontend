import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerOneArea extends React.Component {

  handleClick = () => {
    this.props.deal()
  }

  componentDidUpdate() {
    console.log("UPDATED")
  }

  render() {
    let shuffle = require('shuffle-array')
    return(
      <div id="player-one-area" >
        <PlayerDiscard discard={this.props.discard1} />
        <PlayerDeck key="deck1" deck={shuffle(this.props.deck1)} handleClick={this.handleClick} />
        <PlayerHand hand={this.props.hand1} />
      </div>
    )
  }
}

function msp(state) {
  // const { gameStart } = state.game
  const { coppers, estates, deck1, discard1, hand1 } = state.supply
  const {  } = state.playerOne

  return {
    // gameStart: gameStart,
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
    }

  }
}

export default connect(msp, mdp)(PlayerOneArea) 