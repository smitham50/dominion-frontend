import React from 'react'
import PlayerArea from './playerarea'
import SupplyArea from './supplyarea'

class PlayTable extends React.Component {
  render() {
    return(
      <div id="play-table">
        <PlayerArea cards={this.props.cards} />
        <SupplyArea cards={this.props.cards} />
      </div>
    )
  }
}

export default PlayTable