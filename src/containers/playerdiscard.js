import React from 'react'
import Card from '../components/card'

class PlayerDiscard extends React.Component {

  renderDiscard = () => {
    return this.props.discard.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="discard-card" />
    })
  }

  render() {
    console.log("PLAYER DISCARD", this.props.discard)
    return (
      <div className="player-discard" >
        {this.props.discard.length > 0 ? this.renderDiscard() : null}
      </div>
    )
  }
}

export default PlayerDiscard