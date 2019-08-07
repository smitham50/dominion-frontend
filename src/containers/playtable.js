import React from 'react'
import PlayerArea from './playerarea'
import SupplyArea from './supplyarea'

class PlayTable extends React.Component {
  render() {
    return(
      <div id="play-table">
        <PlayerArea />
        <SupplyArea />
      </div>
    )
  }
}

export default PlayTable