import React from 'react'
import SupplyCards from 'supplycards'
import TreasureCards from 'treasurecards'
import VictoryCards from 'victorycards'
import Trash from '../components/trash'

class SupplyArea extends React.Component {
  render() {
    return(
      <div>
        <SupplyCards />
        <TreasureCards />
        <VictoryCards />
        <Trash />
      </div>
    )
  }
}

export default SupplyArea