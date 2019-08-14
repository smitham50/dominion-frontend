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
        this.props.setDuchys(cards.filter(card => {
          return card.name === "Duchy"
        }))
        this.props.setProvinces(cards.filter(card => {
          return card.name === "Province"
        }))
      })
  }

  renderEstates = () => {
    return this.props.estates.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderDuchys = () => {
    return this.props.duchys.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderProvinces = () => {
    return this.props.provinces.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  render() {
    return(
      <div id="victory-card-area">
        <div id="estates">
          {this.renderEstates()}
        </div>
        <div id="duchys">
          {this.renderDuchys()}
        </div>
        <div id="provinces">
          {this.renderProvinces()}
        </div>
      </div>
    )
  }
}

function msp(state) {

  const { estates, duchys, provinces } = state.supply

  return {
    estates,
    duchys,
    provinces
  }

}

function mdp(dispatch) {
  return {
    setEstates: (estates) => {
      dispatch({ type: "ESTATES", payload: estates })
    },
    setDuchys: (duchys) => {
      dispatch({ type: "DUCHYS", payload: duchys })
    },
    setProvinces: (provinces) => {
      dispatch({ type: "PROVINCES", payload: provinces })
    }
  }
}

export default connect(msp, mdp)(VictoryCards) 