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

  handleCycle = () => {
    this.props.cycle()
  }


  render() {
    const { discard1, deck1, hand1, turns1 } = this.props
    return(
      <div id="player-one-area" >
        <PlayerDiscard key="discard1" discard={discard1} />
        <PlayerDeck key="deck1" deck={deck1} handleDeal={this.handleDeal} turns={turns1} handleCycle={this.handleCycle} />
        <PlayerHand key="hand1" hand={hand1} handleDraw={this.handleDraw} player="player1" turns={turns1} />
      </div>
    )
  }
}

function msp(state) {
  const { coppers, estates, deck1, discard1, hand1 } = state.supply
  const { turns1 } = state.playerOne

  return {
    coppers,
    estates,
    deck1,
    discard1,
    hand1,
    turns1
  }

}

function mdp(dispatch) {
  return {
    deal: () => {
      dispatch({ type: "DEAL1"})
    },
    draw: () => {
      dispatch({ type: "DRAW1" })
    },
    cycle: () => {
      dispatch({ type: "CYCLE1" })
    }

  }
}

export default connect(msp, mdp)(PlayerOneArea) 