import React, { Fragment } from 'react'
import { connect } from 'react-redux'

class Card extends React.Component {

  handleClick = () => {

    const { 
      className, card, player, playerTurn, playTreasureCard1, 
      playTreasureCard2, buyCard1, buyCard2, playAction1,
      playAction2, wallet1, wallet2, buys1, buys2, actions1, 
      actions2, triggerDispatch1, triggerDispatch2, deck1, deck2
    } = this.props

    if (
      className === "hand-card" && 
      player === "player1" && 
      card.card_type === "Treasure" && 
      playerTurn === false
      ) {
      playTreasureCard1(card)
    } else if (
      className === "hand-card" && 
      player === "player2" && 
      card.card_type === "Treasure" && 
      playerTurn === true
      ) {
      playTreasureCard2(card)
    } else if (
      className === "supply-card" && 
      playerTurn === false && 
      card.cost <= wallet1 && buys1 > 0 
      ) {
      buyCard1(card)
    } else if (
      className === "supply-card" && 
      playerTurn === true && 
      card.cost <= wallet2 && 
      buys2 > 0 
      ) {
      buyCard2(card)
    } else if (
      className === "hand-card" &&
      player === "player1" && 
      card.card_type === "Action" && 
      playerTurn === false && 
      actions1 > 0 
      ) {
      playAction1(card, deck1)
      card.triggers.forEach(trigger => {
        triggerDispatch1(`${trigger}1`)
      })
    } else if (
      className === "hand-card" && 
      player === "player2" &&
      card.card_type === "Action" && 
      playerTurn === true && 
      actions2 > 0
      ) {
      playAction2(card, deck2)
      card.triggers.forEach(trigger => {
        triggerDispatch2(`${trigger}2`)
      })
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

  const { playerTurn, deck1, deck2 } = state.supply
  const { wallet1, buys1, turns1, actions1 } = state.playerOne
  const { wallet2, buys2, turns2, actions2 } = state.playerTwo

  return {

    playerTurn: playerTurn,

    wallet1: wallet1,
    buys1: buys1,
    turns1: turns1,
    actions1: actions1,
    deck1: deck1,

    wallet2: wallet2,
    buys2: buys2,
    turns2: turns2,
    actions2: actions2,
    deck2: deck2

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
    playTreasureCard1: (card) => {
      dispatch({ type: "PLAY_TREASURE1", payload: card })
    },
    playTreasureCard2: (card) => {
      dispatch({ type: "PLAY_TREASURE2", payload: card })
    },
    playAction1: (card, deck) => {
      dispatch({ type: "ACTION1", payload: card, deck: deck })
    },
    playAction2: (card, deck) => {
      dispatch({ type: "ACTION2", payload: card, deck: deck })
    },
    triggerDispatch1: (trigger) => {
      dispatch({ type: trigger })
    },
    triggerDispatch2: (trigger) => {
      dispatch({ type: trigger })
    }
  }
}

export default connect(msp, mdp)(Card)