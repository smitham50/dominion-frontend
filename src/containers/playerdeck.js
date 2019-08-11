import React from 'react'
import Card from '../components/card'

class PlayerDeck extends React.Component {

  renderDeck = () => {
    return this.props.deck.map((card, index) => {
      return <Card key={card.id} card={card} index={index} id="deck-card" />
    })
  }

  render() {
    const { deck, handleDeal, handleCycle, turns } = this.props
    return(
      <div className="player-deck" >
        {
          deck.length > 0 
          ? 
          this.renderDeck() 
          : 
            turns === 0
            ?
              <button onClick={() => handleDeal()}>Deal Cards</button>
            :
              <button onClick={() => handleCycle()}>Cycle Cards</button>
       }
      </div>
    )
  }
}

export default PlayerDeck