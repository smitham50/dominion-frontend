import React from 'react'
import Card from '../components/card'

class PlayerDeck extends React.Component {

  renderDeck = () => {
    return this.props.deck.map((card, index) => {
      return <Card key={card.id} card={card} index={index} id="deck-card" />
    })
  }

  render() {
    console.log("DECK", this.props)
    return(
      <div className="player-deck" >
        {this.props.deck.length > 0 ? this.renderDeck() : <button onClick={() => this.props.handleDeal()}>Deal Cards</button> }
      </div>
    )
  }
}

export default PlayerDeck