import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'

class PlayerTwoArea extends React.Component {
  render() {
    return (
      <div className="player-area" >
        <PlayerDeck />
        <PlayerDiscard />
        <PlayerHand />
      </div>
    )
  }
}

export default PlayerTwoArea