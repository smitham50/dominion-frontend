import React from 'react'
import Card from '../components/card'

class PlayerHand extends React.Component {

  renderHand = () => {
    return this.props.hand.map((card, index) => {
      return <Card key={card.id} card={card} index={index} player={this.props.player} className="hand-card" />
    })
  }

  render() {
    return (
      <div className="player-hand" >
        {
          this.props.hand.length > 0 
          ? 
          this.renderHand() 
          :
            this.props.turns === 0 && (!this.props.gameStart1 && !this.props.gameStart2) && this.props.deck.length > 0
            ? 
            <button onClick={() => this.props.handleDraw()}>Draw Hand</button>
            :
            null
        }
      </div>
    )
  }
}

export default PlayerHand