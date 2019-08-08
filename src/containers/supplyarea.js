import React from 'react'
import ActionCards from './actioncards'
import TreasureCards from './treasurecards'
import VictoryCards from './victorycards'

class SupplyArea extends React.Component {
  render() {
    return(
      <div id="supply-area">
        <div id="tvcard-container">
          <TreasureCards />
          <VictoryCards />
        </div>
        <div id="action-card-container">
          <ActionCards />
        </div>
      </div>
    )
  }
}

export default SupplyArea