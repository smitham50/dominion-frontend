import React, { Fragment } from 'react'
import { connect } from 'react-redux'

class Card extends React.Component {

  handleClick = () => {
    console.log("CARD PROPS", this.props)
    if (this.props.isInSupply) {
      this.props.buyCard()
    }
    else if (this.props.isInHand) {
      this.props.playCard()
    }
  }

  render() {
    
    return(
      <Fragment>
        {
          this.props.index === 0 
          ? 
          <img src={
            this.props.id === "deck-card" 
            ? 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxjXZTHcRqwUrA4nW09UvtRlXPGlhAZdOQC6_-s71LayIknwS" 
            : 
              this.props.card.picture} alt="oops" onClick={() => this.handleClick()} >
            </img> 
          : 
          <img src={
            this.props.id === "deck-card" 
            ? 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxjXZTHcRqwUrA4nW09UvtRlXPGlhAZdOQC6_-s71LayIknwS" 
            :
              this.props.card.picture} alt="oops" className="rest" onClick={() => this.handleClick()}>
            </img> 
          }
      </Fragment>
    )
  }

}

function msp(state) {

  const { isInSupply, isInDiscard, isInDeck, isInHand, isInTrash } = state.card

  return {
    isInSupply: isInSupply,
    isInDiscard: isInDiscard,
    isInDeck: isInDeck,
    isInHand: isInHand,
    isInTrash: isInTrash
  }

}

function mdp(dispatch) {
  return {
    buyCard: () => {
      dispatch({ type: "BUY" })
    },
    deal: () => {
      dispatch({ type: "DEAL" })
    },
    cycle: () => {
      dispatch({ type: "CYCLE" })
    },
    draw: () => {
      dispatch({ type: "DRAW" })
    },
    scrap: () => {
      dispatch({ type: "SCRAP" })
    },
    playCard: () => {
      dispatch({ type: "PLAY" })
    }
  }
}

export default connect(msp, mdp)(Card)