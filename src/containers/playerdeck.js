import React from 'react'
import Card from '../components/card'

class PlayerDeck extends React.Component {

  renderDeck = () => {
    return this.props.deck.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  render() {
    console.log("DECK", this.props.deck)
    return(
      <div className="player-deck" >
        {!this.props.deck ? <button onClick={() => this.props.handleClick()}>Deal Cards</button> : this.renderDeck() }
      </div>
    )
  }
}

export default PlayerDeck