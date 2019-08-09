import React from 'react'
import PlayerOneArea from './playeronearea'
import PlayerTwoArea from './playertwoarea'
import SupplyArea from './supplyarea'
import Trash from '../components/trash'

class PlayTable extends React.Component {

  render() {
    return(
      <div id="play-table">
        <SupplyArea />
        <div id="player-area-container">
          <PlayerOneArea />
          <Trash />
          <PlayerTwoArea />
        </div>
      </div>
    )
  }
}

export default PlayTable