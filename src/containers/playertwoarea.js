import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerTwoArea extends React.Component {

  handleDeal = () => {
    this.props.deal()
  }

  handleDraw = () => {
    this.props.draw()
  }

  render() {
    return (
      <div id="player-two-area" >
        <PlayerHand key="hand2" hand={this.props.hand2} handleDraw={this.handleDraw}/>
        <PlayerDeck key="deck2" deck={this.props.deck2} handleDeal={this.handleDeal} />
        <PlayerDiscard discard={this.props.discard}/>
      </div>
    )
  }
}

function msp(state) {
  const { coppers, estates, deck2, discard2, hand2 } = state.supply
  const {  } = state.playerTwo

  return {
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
    },
    draw: () => {
      dispatch({ type: "DRAW2" })
    }
  }
}

export default connect(msp, mdp)(PlayerTwoArea) 