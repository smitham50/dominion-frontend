import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

class VictoryCards extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cards')
      .then(resp => resp.json())
      .then(cards => {
        this.props.setEstates(cards.filter(card => {
          return card.name === "Estate"
        }))
        this.props.setDuchies(cards.filter(card => {
          return card.name === "Duchy"
        }))
        this.props.setProvinces(cards.filter(card => {
          return card.name === "Province"
        }))
      })
  }

  renderEstates = () => {
    return this.props.estates.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  renderDuchies = () => {
    return this.props.duchies.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  renderProvinces = () => {
    return this.props.provinces.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  render() {
    return(
      <div id="victory-card-area">
        <div id="estates">
          {}
        </div>
        <div id="duchies">
          {}
        </div>
        <div id="provinces">
          {}
        </div>
      </div>
    )
  }
}

function msp(state) {

  const { estates, duchies, provinces } = state.supply

  return {
    estates: estates,
    duchies: duchies,
    provinces: provinces
  }

}

function mdp(dispatch) {
  return {
    setEstates: (estates) => {
      dispatch({ type: "ESTATES", payload: estates })
    },
    setDuchies: (duchies) => {
      dispatch({ type: "DUCHIES", payload: duchies })
    },
    setProvinces: (provinces) => {
      dispatch({ type: "PROVINCES", payload: provinces })
    }
  }
}

export default connect(msp, mdp)(VictoryCards)