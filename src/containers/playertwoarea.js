import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerTwoArea extends React.Component {

  handleClick = () => {
    this.props.deal()
  }

  render() {
    return (
      <div id="player-two-area" >
        <PlayerHand />
        <PlayerDeck key="deck2" deck={this.props.deck2} handleClick={this.handleClick} />
        <PlayerDiscard discard={this.props.discard}/>
      </div>
    )
  }
}

function msp(state) {

  // const { gameStart } = state.game
  const { coppers, estates, deck2, discard2, hand2 } = state.supply
  const {  } = state.playerTwo

  return {
    // gameStart: gameStart,
    coppers: coppers,
    estates: estates,
    deck2: deck2,
    discard2: discard2,
    hand2: hand2
  }

}

function mdp(dispatch) {
  return {
    deal: () => {
      dispatch({ type: "DEAL2" })
    }
  }
}

export default connect(msp, mdp)(PlayerTwoArea) 