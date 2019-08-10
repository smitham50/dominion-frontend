import React from 'react'
import Card from '../components/card'

class PlayerHand extends React.Component {

  renderHand = () => {
    return this.props.hand.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="hand-card" />
    })
  }

  render() {
    return (
      <div className="player-hand" >
        {this.props.hand.length > 0 ? this.renderHand() : <button onClick={() => this.props.handleDraw()}>Draw Hand</button>}
      </div>
    )
  }
}

export default PlayerHand