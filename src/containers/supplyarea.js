import React from 'react'
import SupplyCards from './supplycards'
import TreasureCards from './treasurecards'
import VictoryCards from './victorycards'
import Trash from '../components/trash'

class SupplyArea extends React.Component {
  render() {
    return(
      <div id="supply-area">
        <SupplyCards cards={this.props.cards} />
        <TreasureCards cards={this.props.cards} />
        <VictoryCards cards={this.props.cards} />
        <Trash cards={this.props.cards} />
      </div>
    )
  }
}

export default SupplyArea