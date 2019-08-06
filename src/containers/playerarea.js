import React from 'react'
import PlayerDeck from 'playerdeck'
import PlayerDiscard from 'playerdiscard'
import PlayerHand from 'playerhand'

class PlayerArea extends React.Component {
  render() {
    return(
      <div>
        <PlayerDeck />
        <PlayerDiscard />
        <PlayerHand />
      </div>
    )
  }
}

export default PlayerArea