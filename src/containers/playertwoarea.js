import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'

class PlayerTwoArea extends React.Component {
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

export default PlayerTwoArea