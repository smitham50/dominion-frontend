import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import trash from './trash';

class Card extends React.Component {

  handleClick = () => {

    const { 
      className, card, player, playerTurn, playTreasureCard1, 
      playTreasureCard2, buyCard1, buyCard2, playAction1,
      playAction2, wallet1, wallet2, buys1, buys2, actions1, 
      actions2, triggerDispatch1, triggerDispatch2, deck1, deck2,
      mine, hand1, hand2, trashTreasure1, trashTreasure2,
      trashRemodel1, trashRemodel2, gainRemodel1, gainRemodel2,
      remodel, remodelGain, remodelValue, workshop, gainWorkshop1,
      gainWorkshop2, militia, militiaDefend1, militiaDefend2,
      militiaDiscardFirst,militiaDiscardSecond, militiaDiscardFirst1, militiaDiscardFirst2,
      militiaDiscardSecond1, militiaDiscardSecond2, militiaBreak, cellar1, cellar2,
      cellarDiscard1, cellarDiscard2
    } = this.props
    // PLAY TREASURE CARD OR TRASH TREASURE CARD IF MINE OR REMODEL PLAYED
    if (
      className === "hand-card" && 
      player === "player1" && 
      card.card_type === "Treasure" && 
      playerTurn === false
      ) {
        if (mine === false && remodel === false) {
          playTreasureCard1(card)
        } else if (mine === true) {
          if (card.name === "Copper") {
            trashTreasure1(card, "silvers")
          } else if (card.name === "Silver") {
            trashTreasure1(card, "golds")
          }
        } else if (remodel === true) {
          trashRemodel1(card)
        }
    } else if (
      className === "hand-card" && 
      player === "player2" && 
      card.card_type === "Treasure" && 
      playerTurn === true
      ) {
        if (mine === false && remodel === false) {
          playTreasureCard2(card)
        } else if (mine === true) {
          if (card.name === "Copper") {
            trashTreasure2(card, "silvers")
          } else if (card.name === "Silver") {
            trashTreasure2(card, "golds")
          }
        } else if (remodel === true) {
          trashRemodel2(card)
        }
    } 
    // BUY SUPPLY CARD
    else if (
      className === "supply-card" && 
      playerTurn === false && 
      remodelGain === false &&
      workshop === false &&
      card.cost <= wallet1 && 
      buys1 > 0 
      ) {
      buyCard1(card)
    } else if (
      className === "supply-card" && 
      playerTurn === true && 
      remodelGain === false &&
      workshop === false &&
      card.cost <= wallet2 && 
      buys2 > 0 
      ) {
      buyCard2(card)
    } 
    // WORKSHOP GAIN CARD
    else if (
      className === "supply-card" &&
      playerTurn === false &&
      workshop === true &&
      card.cost <= 4
    ) {
      gainWorkshop1(card)
    } else if (
      className === "supply-card" &&
      playerTurn === true &&
      workshop === true &&
      card.cost <= 4
    ) {
      gainWorkshop2(card)
    }
    // REMODEL GAIN CARD
    else if (
      className === "supply-card" &&
      playerTurn === false &&
      remodelGain === true &&
      card.cost <= remodelValue
    ) {
      gainRemodel1(card)
    }
    else if (
      className === "supply-card" &&
      playerTurn === true &&
      remodelGain === true &&
      card.cost <= remodelValue
    ) {
      gainRemodel2(card)
    }
    // PLAY ACTION CARD
    else if (
      className === "hand-card" && 
      player ==="player1" &&
      card.card_type === "Action" &&
      militia === false &&
      militiaDiscardFirst === false &&
      militiaDiscardSecond === false &&
      remodel === false &&
      cellar1 === false && 
      cellar2 === false &&
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
      militia === false &&
      militiaDiscardFirst === false &&
      militiaDiscardSecond === false &&
      remodel === false &&
      cellar1 === false &&
      cellar2 === false &&
      playerTurn === true && 
      actions2 > 0
      ) {
      playAction2(card, deck2)
      card.triggers.forEach(trigger => {
        triggerDispatch2(`${trigger}2`)
      })
    }
    // CELLAR
    else if (
      cellar1 === true &&
      className === "hand-card" &&
      player === "player1" &&
      playerTurn === "false" &&
      militia === false &&
      remodel === false &&
      militiaDiscardFirst === false &&
      militiaDiscardSecond === false
      ) {
        cellarDiscard1(card)
    } else if (
      cellar2 === true &&
      className === "hand-card" &&
      player === "player2" &&
      playerTurn === "true" &&
      militia === false &&
      remodel === false &&
      militiaDiscardFirst === false &&
      militiaDiscardSecond === false
    ) {
      cellarDiscard2(card)
    } 
    // MILITIA RESPONSES
      // MOAT OR MILITIA DISCARD FIRST
    else if (militia === true && militiaDiscardFirst === true) {
      if (
        playerTurn === false &&
        className === "hand-card" &&
        player === "player2" &&
        hand2.length > 3
      ) {
        if (card.name !== "Moat"){
          militiaDiscardFirst1(card)
        } else if (card.name === "Moat") {
          militiaDefend1(card)
        } else {
          militiaBreak()
        }
      } else if (
        playerTurn === true &&
        className === "hand-card" &&
        player === "player1" &&
        hand1.length > 3
      ) {
        if (card.name !== "Moat"){
          militiaDiscardFirst2(card)
        } else if (card.name === "Moat") {
          militiaDefend2(card)
        } else {
          militiaBreak()
        }
      }
    }
      // MILITIA DISCARD SECOND
      else if (militiaDiscardSecond === true) {
        if (
          playerTurn === false &&
          className === "hand-card" &&
          player === "player2"
        ) {
          if (hand2.length > 3) {
            militiaDiscardSecond1(card)
          } else {
            militiaBreak()
          }
        } else if (
          playerTurn === true &&
          className === "hand-card" &&
          player === "player1"
        ) {
          if (hand1.length > 3) {
            militiaDiscardSecond2(card)
          } else {
            militiaBreak()
          }
        }
      }
    // REMODEL ACTION OR VICTORY CARD
    else if (
      className === "hand-card" &&
      player === "player1" &&
      playerTurn === false &&
      remodel === true &&
      (card.card_type === "Action" || card.card_type === "Victory")
    ) {
      trashRemodel1(card)
    } else if (
      className === "hand-card" &&
      player === "player2" &&
      playerTurn === true &&
      remodel === true &&
      (card.card_type === "Action" || card.card_type === "Victory")
    ) {
      trashRemodel2(card)
    } 
    // REMODEL VICTORY CARD
    
  }

  render() {
    console.log("CELLARS???", this.props.cellar)
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

  const { 
    playerTurn, deck1, deck2, hand1, hand2, mine, remodel, remodelGain, 
    remodelValue, workshop, militia, militiaDiscardFirst, militiaDiscardSecond,
    cellar1, cellar2
  } = state.supply
  const { wallet1, buys1, turns1, actions1 } = state.playerOne
  const { wallet2, buys2, turns2, actions2 } = state.playerTwo

  return {

    playerTurn,
    mine,
    remodel,
    remodelGain,
    remodelValue,
    workshop,
    militia,
    militiaDiscardFirst,
    militiaDiscardSecond,
    cellar1,
    cellar2,


    wallet1,
    buys1,
    turns1,
    actions1,
    deck1,
    hand1,

    wallet2,
    buys2,
    turns2,
    actions2,
    deck2,
    hand2

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
    },
    trashTreasure1: (card, treasure) => {
      dispatch({ type: "TRASH_TREASURE1", payload: card, treasure: treasure })
    },
    trashTreasure2: (card, treasure) => {
      dispatch({ type: "TRASH_TREASURE2", payload: card, treasure: treasure })
    },
    trashRemodel1: (card) => {
      dispatch({ type: "TRASH_REMODEL1", payload: card })
    },
    trashRemodel2: (card) => {
      dispatch({ type: "TRASH_REMODEL2", payload: card })
    },
    trashVictory1: (card) => {
      dispatch({ type: "TRASH_VICTORY1", payload: card})
    },
    trashVictory2: (card) => {
      dispatch({ type: "TRASH_VICTORY2", payload: card })
    },
    gainRemodel1: (card) => {
      dispatch({ type: "GAIN_REMODEL1", payload: card })
    },
    gainRemodel2: (card) => {
      dispatch({ type: "GAIN_REMODEL2", payload: card })
    },
    gainWorkshop1: (card) => {
      dispatch({ type: "GAIN_WORKSHOP1", payload: card })
    },
    gainWorkshop2: (card) => {
      dispatch({ type: "GAIN_WORKSHOP2", payload: card })
    },
    militiaDefend1: (card) => {
      dispatch({ type: "MILITIA_DEFEND1", payload: card })
    },
    militiaDefend2: (card) => {
      dispatch({ type: "MILITIA_DEFEND2", payload: card })
    },
    militiaDiscardFirst1: (card) => {
      dispatch({ type: "MILITIA_DISCARD_FIRST1", payload: card })
    },
    militiaDiscardFirst2: (card) => {
      dispatch({ type: "MILITIA_DISCARD_FIRST2", payload: card })
    },
    militiaDiscardSecond1: (card) => {
      dispatch({ type: "MILITIA_DISCARD_SECOND1", payload: card })
    },
    militiaDiscardSecond2: (card) => {
      dispatch({ type: "MILITIA_DISCARD_SECOND2", payload: card })
    },
    militiaBreak: () => {
      dispatch({ type: "MILITIA_BREAK" })
    },
    cellarDiscard1: (card) => {
      dispatch({ type: "CELLAR_DISCARD1", payload: card })
    },
    cellarDiscard2: (card) => {
      dispatch({ type: "CELLAR_DISCARD2", payload: card })
    }
  }

}

export default connect(msp, mdp)(Card)