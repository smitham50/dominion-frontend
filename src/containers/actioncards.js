import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

class ActionCards extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cards')
      .then(resp => resp.json())
      .then(cards => {
        this.props.setCellars(cards.filter(card => {
          return card.name === "Cellar"
        }))
        this.props.setMoats(cards.filter(card => {
          return card.name === "Moat"
        }))
        this.props.setWorkshops(cards.filter(card => {
          return card.name === "Workshop"
        }))
        this.props.setWoodcutters(cards.filter(card => {
          return card.name === "Woodcutter"
        }))
        this.props.setVillages(cards.filter(card => {
          return card.name === "Village"
        }))
        this.props.setMilitias(cards.filter(card => {
          return card.name === "Militia"
        }))
        this.props.setSmithies(cards.filter(card => {
          return card.name === "Smithy"
        }))
        this.props.setRemodels(cards.filter(card => {
          return card.name === "Remodel"
        }))
        this.props.setMarkets(cards.filter(card => {
          return card.name === "Market"
        }))
        this.props.setMines(cards.filter(card => {
          return card.name === "Mine"
        }))
      })
  }

  


  render() {
    console.log("CARDS", this.props.cellars, this.props.moats, this.props.workshops, this.props.woodcutters, this.props.villages, this.props.militias, this.props.smithies, this.props.remodels, this.props.markets, this.props.mines)
    return(
      <div id="action-card-area" >
        <div id="cellars">
          {}
        </div>
        <div id="moats">
          {}
        </div>
        <div id="workshops">
          {}
        </div>
        <div id="woodcutters">
          {}
        </div>
        <div id="villages">
          {}
        </div>
        <div id="smithies">
          {}
        </div>
        <div id="militias">
          {}
        </div>
        <div id="remodels">
          {}
        </div>
        <div id="markets">
          {}
        </div>
        <div id="mines">
          {}
        </div>
      </div>
    )
  }
}

function msp(state) {

  return {
    cellars: state.supply.cellars,
    moats: state.supply.moats,
    workshops: state.supply.workshops,
    woodcutters: state.supply.woodcutters,
    villages: state.supply.villages,
    militias: state.supply.militias,
    smithies: state.supply.smithies,
    remodels: state.supply.remodels,
    markets: state.supply.markets,
    mines: state.supply.mines
  }
}

function mdp(dispatch) {
  return {
    setCellars: (cellars) => {
      dispatch({ type: "CELLARS", payload: cellars })
    },
    setMoats: (moats) => {
      dispatch({ type: "MOATS", payload: moats })
    },
    setWorkshops: (workshops) => {
      dispatch({ type: "WORKSHOPS", payload: workshops })
    },
    setWoodcutters: (woodcutters) => {
      dispatch({ type: "WOODCUTTERS", payload: woodcutters })
    },
    setVillages: (villages) => {
      dispatch({ type: "VILLAGES", payload: villages })
    },
    setMilitias: (militias) => {
      dispatch({ type: "MILITIAS", payload: militias })
    },
    setSmithies: (smithies) => {
      dispatch({ type: "SMITHIES", payload: smithies })
    },
    setRemodels: (remodels) => {
      dispatch({ type: "REMODELS", payload: remodels })
    },
    setMarkets: (markets) => {
      dispatch({ type: "MARKETS", payload: markets })
    },
    setMines: (mines) => {
      dispatch({ type: "MINES", payload: mines })
    },
  }
}

export default connect(msp, mdp)(ActionCards)

