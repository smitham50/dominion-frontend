import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'
import { connect } from 'react-redux'

class PlayerTwoArea extends React.Component {

  componentDidMount() {
    this.props.drawDeck()
  }

  render() {
    return (
      <div id="player-two-area" >
        <PlayerHand />
        <PlayerDeck />
        <PlayerDiscard />
      </div>
    )
  }
}

function msp(state) {

  const { gameStart } = state.game

  return {
    gameStart: gameStart
  }

}

function mdp(dispatch) {
  return {
    drawDeck: () => {
      dispatch({ type: "START" })
    }
  }
}

export default connect(msp, mdp)(PlayerTwoArea) 