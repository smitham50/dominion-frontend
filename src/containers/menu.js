import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Menu extends React.Component {

  render() {
    return(
      <div id="menu" >
        <div id="menu-list">
          <Link to="/playgame" onClick={this.props.startGame}>Start Game</Link>
          <Link to="/instructions" >Instructions</Link>
        </div>
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
    }
  }
}

export default connect(msp, mdp)(Menu) 