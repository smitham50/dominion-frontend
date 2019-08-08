import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

class ActionCards extends React.Component {

  getActionCards = () => {
    const actionCards = this.props.cards.filter(card => {
      return card.card_type === "Action"
    })
    this.sortActionCards(actionCards)
  }

  getMoats = () => {
    const moats = this.props.cards.filter(card => {
      return card.name === "Moat"
    })
    this.renderMoats(moats)
  }

  sortActionCards = (actionCards) => {
    console.log("SORTED", actionCards)
    this.renderCellars(actionCards.filter(card => {
      return card.name === "Cellar"
    }))
    this.getMoats()
    this.renderWoodCutters(actionCards.filter(card => {
      return card.name === "Woodcutter"
    }))
    this.renderWorkshops(actionCards.filter(card => {
      return card.name === "Workshop"
    }))
    this.renderVillages(actionCards.filter(card => {
      return card.name === "Village"
    }))
    this.renderSmithies(actionCards.filter(card => {
      return card.name === "Smithy"
    }))
    this.renderRemodels(actionCards.filter(card => {
      return card.name === "Remodel"
    }))
    this.renderRemodels(actionCards.filter(card => {
      return card.name === "Remodel"
    }))
    this.renderMilitias(actionCards.filter(card => {
      return card.name === "Militia"
    }))
    this.renderMarkets(actionCards.filter(card => {
      return card.name === "Market"
    }))
    this.renderMines(actionCards.filter(card => {
      return card.name === "Mine"
    }))
     
  }

  renderCellars = (cellars) => {
    console.log("CELLARS", cellars)
  }

  renderMoats = (moats) => {
    console.log("MOATS", moats)
  }

  renderWoodCutters = (woodcutters) => {
    console.log("WOODCUTTERS", woodcutters)
  }

  renderWorkshops = (workshops) => {
    console.log("WORKSHOPS", workshops)
  }

  renderVillages = (villages) => {
    console.log("VILLAGES", villages)
  }

  renderSmithies = (smithies) => {
    console.log("SMITHIES", smithies)
  }

  renderRemodels = (remodels) => {
    console.log("REMODELS", remodels)
  }

  renderMilitias = (militias) => {
    console.log("MILITIAS", militias)
  }

  renderMarkets = (markets) => {
    console.log("MARKETS", markets)
  }

  renderMines = (mines) => {
    console.log("MINES", mines)
  }


  render() {
    return(
      <div id="action-card-area" >
        {
        this.getActionCards()
        }
      </div>
    )
  }
}

function msp(state) {

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

