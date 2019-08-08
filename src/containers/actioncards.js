import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

class ActionCards extends React.Component {

  sortActionCards = () => {
    const actionCards = this.props.cards.filter(card => {
      return card.card_type === "Action"
    })
    this.sortActionCards(actionCards)
  }

  sortActionCards = (actionCards) => {
    this.render    
  }



  render() {
    console.log("RENDER", this.props.cards)
    return(
      <div id="action-card-area" >
        {this.sortActionCards()}
      </div>
    )
  }
}

function msp(state) {
  console.log("ACTION CONTAINER", state)

  return {
    cards: state.game.cards
  }
}

function mdp(dispatch) {
  return {
    setCards: (cards) => {
      dispatch({ type: "CARDS", payload: cards })
    }
  }
}

export default connect(msp, mdp)(ActionCards)

