import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

class TreasureCards extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cards')
      .then(resp => resp.json())
      .then(cards => {
        this.props.setCoppers(cards.filter(card => {
          return card.name === "Copper"
        }))
        this.props.setSilvers(cards.filter(card => {
          return card.name === "Silver"
        }))
        this.props.setGolds(cards.filter(card => {
          return card.name === "Gold"
        }))
      })
  }

  renderCoppers = () => {
    return this.props.coppers.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  renderSilvers = () => {
    return this.props.silvers.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  renderGolds = () => {
    return this.props.golds.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  render() {
    return(
      <div id="treasure-card-area">
        <div id="coppers">
          {this.renderCoppers()}
        </div>
        <div id="silvers">
          {this.renderSilvers()}
        </div>
        <div id="golds">
          {this.renderGolds()}
        </div>
      </div>
    )
  }
}

function msp(state) {

  const { coppers, silvers, golds } = state.supply

  return {
    coppers: coppers,
    silvers: silvers,
    golds: golds
  }

}

function mdp(dispatch) {
  return {
    setCoppers: (coppers) => {
      dispatch({ type: "COPPERS", payload: coppers })
    },
    setSilvers: (silvers) => {
      dispatch({ type: "SILVERS", payload: silvers })
    },
    setGolds: (golds) => {
      dispatch({ type: "GOLDS", payload: golds })
    }
  }
}

export default connect(msp, mdp)(TreasureCards)