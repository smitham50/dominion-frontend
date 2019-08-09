import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Menu extends React.Component {
  render() {
    return(
      <div id="menu" >
        <Link to="/playgame" onClick={this.handleClick}>Start Game</Link>
      </div>
    )
  }
}

function msp(state) {

  const {  } = state.supply

  return {
    
  }

}

function mdp(dispatch) {
  return {
    startGame: () => {
      dispatch({ type: "START" })
    },
    setSilvers: (silvers) => {
      dispatch({ type: "SILVERS", payload: silvers })
    },
    setGolds: (golds) => {
      dispatch({ type: "GOLDS", payload: golds })
    }
  }
}

export default connect(msp, mdp)(Menu)