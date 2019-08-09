import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerOneArea extends React.Component {

  componentDidMount() {
    // this.props.drawDeck()
  }

  render() {
    return(
      <div id="player-one-area" >
        <PlayerDiscard />
        <PlayerDeck />
        <PlayerHand />
      </div>
    )
  }
}

function msp(state) {

  const { gameStart } = state.game
  const { deck1 } = state.supply
  const { deck } = state.playerOne

  return {
    gameStart: gameStart,
    deck1: deck1,
    deck: deck
  }

}

function mdp(dispatch) {
  return {
    // drawDeck: () => {
    //   dispatch({ type: "START", payload:  })
    // }
  }
}

export default connect(msp, mdp)(PlayerOneArea) 