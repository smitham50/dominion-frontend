import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'

class PlayerOneArea extends React.Component {
  render() {
    return(
      <div id="player-one-area" >
        <PlayerDeck />
        <PlayerDiscard />
        <PlayerHand />
      </div>
    )
  }
}

export default PlayerOneArea