import React from 'react'
import { connect } from 'react-redux'

class CardInfo extends React.Component {

  render() {
    return (
      <div id="card-info" >
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
    
  }
}

export default connect(msp, mdp)(CardInfo)