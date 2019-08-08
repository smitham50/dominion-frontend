import React from 'react'
import PlayerOneArea from './playeronearea'
import PlayerTwoArea from './playertwoarea'
import SupplyArea from './supplyarea'

class PlayTable extends React.Component {
  render() {
    return(
      <div id="play-table">
        <PlayerOneArea />
        <PlayerTwoArea />
        <SupplyArea />
      </div>
    )
  }
}

export default PlayTable