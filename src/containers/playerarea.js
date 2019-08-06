import React from 'react'
import PlayerDeck from './playerdeck'
import PlayerDiscard from './playerdiscard'
import PlayerHand from './playerhand'

class PlayerArea extends React.Component {
  render() {
    return(
      <div className="player-area" >
        <PlayerDeck cards={this.props.cards} />
        <PlayerDiscard cards={this.props.cards} />
        <PlayerHand cards={this.props.cards} />
      </div>
    )
  }
}

export default PlayerArea