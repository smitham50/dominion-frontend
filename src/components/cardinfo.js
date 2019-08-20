import React from 'react'
import { connect } from 'react-redux'

class CardInfo extends React.Component {

  render() {
    const { card } = this.props.hoverCard.props
    return (
      <div id="card-info" >
        <h3>{ card.name }</h3>
        <p>{ card.description }</p>
        <p>Cost: { card.cost }</p>
      </div>
    )
  }
}

function msp(state) {

  const { hoverCard } = state.supply

  return {
    hoverCard
  }

}


export default connect(msp, null)(CardInfo)