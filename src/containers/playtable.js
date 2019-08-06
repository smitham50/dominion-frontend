import React from 'react'
import PlayerArea from 'playerarea'
import SupplyArea from 'supplyarea'

class PlayTable extends React.Component {
  render() {
    return(
      <div>
        <PlayerArea />
        <SupplyArea />
      </div>
    )
  }
}

export default PlayTable