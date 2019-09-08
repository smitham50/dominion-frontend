import React from 'react'
import Card from '../components/card'
import { connect } from 'react-redux'

class ActionCards extends React.Component {

  componentDidMount() {
    fetch('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
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
        this.props.setSmithys(cards.filter(card => {
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

  renderCellars = () => {
    return this.props.cellars.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderMoats = () => {
    return this.props.moats.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderWorkshops = () => {
    return this.props.workshops.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderWoodcutters = () => {
    return this.props.woodcutters.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderVillages = () => {
    return this.props.villages.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderSmithys = () => {
    return this.props.smithys.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderMilitias = () => {
    return this.props.militias.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderRemodels = () => {
    return this.props.remodels.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderMarkets = () => {
    return this.props.markets.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }

  renderMines = () => {
    return this.props.mines.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="supply-card" />
    })
  }


  render() {
    return(
      <div id="action-card-area" >
        <div id="cellars">
          {this.renderCellars()}
        </div>
        <div id="moats">
          {this.renderMoats()}
        </div>
        <div id="workshops">
          {this.renderWorkshops()}
        </div>
        <div id="woodcutters">
          {this.renderWoodcutters()}
        </div>
        <div id="villages">
          {this.renderVillages()}
        </div>
        <div id="smithys">
          {this.renderSmithys()}
        </div>
        <div id="militias">
          {this.renderMilitias()}
        </div>
        <div id="remodels">
          {this.renderRemodels()}
        </div>
        <div id="markets">
          {this.renderMarkets()}
        </div>
        <div id="mines">
          {this.renderMines()}
        </div>
      </div>
    )
  }
}

function msp(state) {

  const { cellars, moats, workshops, woodcutters, villages, militias, smithys, remodels, markets, mines } = state.supply

  return {
    cellars: cellars,
    moats: moats,
    workshops: workshops,
    woodcutters: woodcutters,
    villages: villages,
    militias: militias,
    smithys: smithys,
    remodels: remodels,
    markets: markets,
    mines: mines
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
    setSmithys: (smithys) => {
      dispatch({ type: "SMITHYS", payload: smithys })
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

