import React from 'react'
import PlayerOneArea from './playeronearea'
import PlayerTwoArea from './playertwoarea'
import SupplyArea from './supplyarea'
import Trash from '../components/trash'
import CardInfo from '../components/cardinfo'
import { connect } from 'react-redux'

class PlayTable extends React.Component {

  render() {
    return(
      <div id="play-table">
        <SupplyArea />
        <div id="player-area-container">
          <PlayerOneArea />
          { this.props.isHovered ? <CardInfo key="card-info" /> : <Trash />}
          <PlayerTwoArea />
        </div>
      </div>
    )
  }
}

function msp(state) {

  const { isHovered } = state.supply

  return {
    isHovered
  }

}

export default connect(msp, null)(PlayTable)