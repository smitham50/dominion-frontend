import React, { Fragment } from 'react'
import { connect } from 'react-redux'

class Card extends React.Component {

  handleClick = () => {

    const { 
      className, card, player, playerTurn, playTreasureCard1, 
      playTreasureCard2, buyCard1, buyCard2, wallet1, 
      wallet2, buys1, buys2 
    } = this.props

    if (className === "hand-card" && player === "player1" && card.card_type === "Treasure" && playerTurn === false) {
      playTreasureCard1(card)
    } else if (className === "hand-card" && player === "player2" && card.card_type === "Treasure" && playerTurn === true) {
      playTreasureCard2(card)
    } else if (className === "supply-card" && playerTurn === false && card.cost <= wallet1 && buys1 > 0 ) {
      buyCard1(card)
    } else if (className === "supply-card" && playerTurn === true && card.cost <= wallet2 && buys2 > 0 ) {
      buyCard2(card)
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

  const { playerTurn } = state.supply
  const { wallet1, buys1, turns1, actions1 } = state.playerOne
  const { wallet2, buys2, turns2, actions2 } = state.playerTwo

  return {

    playerTurn: playerTurn,

    wallet1: wallet1,
    buys1: buys1,
    turns1: turns1,
    actions1: actions1,

    wallet2: wallet2,
    buys2: buys2,
    turns2: turns2,
    actions2: actions2

  }

}

function mdp(dispatch) {
  return {
    buyCard1: (card) => {
      dispatch({ type: "BUY1", payload: card})
    },
    buyCard2: (card) => {
      dispatch({ type: "BUY2", payload: card})
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
    playTreasureCard1: (card) => {
      dispatch({ type: "PLAY_TREASURE1", payload: card })
    },
    playTreasureCard2: (card) => {
      dispatch({ type: "PLAY_TREASURE2", payload: card })
    }
  }
}

export default connect(msp, mdp)(Card)