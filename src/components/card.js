import React, { Fragment } from 'react'
import { connect } from 'react-redux'

class Card extends React.Component {

  componentWillUnmount = () => {  
    if (!this.props.trash.includes(this.props.card)) {
      this.props.hoverOff() 
    }
  }

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

    //HAND CARD LOGIC
    if (className === "hand-card") {
      // PLAY TREASURE CARD OR TRASH TREASURE CARD IF MINE OR REMODEL PLAYED
      if (
        !cellar1 &&
        !cellar2 &&
        !militia &&
        !militiaDiscardSecond &&
        card.card_type === "Treasure"
      ) {
        if (player === "player1" && !playerTurn) {
          if (!mine && !remodel) {
            playTreasureCard1(card)
          } else if (mine) {
            if (card.name === "Copper") {
              trashTreasure1(card, "silvers")
            } else if (card.name === "Silver") {
              trashTreasure1(card, "golds")
            }
          } else if (remodel) {
            trashRemodel1(card)
          }
        }
        else if (player === "player2" && playerTurn) {
          if (!mine && !remodel) {
            playTreasureCard2(card)
          } else if (mine) {
            if (card.name === "Copper") {
              trashTreasure2(card, "silvers")
            } else if (card.name === "Silver") {
              trashTreasure2(card, "golds")
            }
          } else if (remodel) {
            trashRemodel2(card)
          }
        }
      }
      // PLAY ACTION CARD
      else if (
        card.card_type === "Action" &&
        !militia &&
        !militiaDiscardFirst &&
        !militiaDiscardSecond &&
        !remodel &&
        !cellar1 &&
        !cellar2
      ) {
        if (player === "player1" && !playerTurn && actions1 > 0) {
          playAction1(card, deck1)
          card.triggers.forEach(trigger => {
            triggerDispatch1(`${trigger}1`)
          })
        } else if (player === "player2" && playerTurn && actions2 > 0) {
          playAction2(card, deck2)
          card.triggers.forEach(trigger => {
            triggerDispatch2(`${trigger}2`)
          })
        }
      }
      // CELLAR
      else if (
        !militia &&
        !remodel &&
        !militiaDiscardFirst &&
        !militiaDiscardSecond
      ) {
        if (
          cellar1 &&
          player === "player1" &&
          !playerTurn
        ) {
          cellarDiscard1(card)
        } else if (
          cellar2 &&
          player === "player2" &&
          playerTurn
        ) {
          cellarDiscard2(card)
        }
      }
      // MILITIA RESPONSES
      // MOAT OR MILITIA DISCARD FIRST
      else if (militia && militiaDiscardFirst) {
          if (!playerTurn && player === "player2") {
            if (card.name !== "Moat") {
              militiaDiscardFirst1(card)
            } else {
              militiaDefend1(card)
            }
          } else if (playerTurn && player === "player1") {
            if (card.name !== "Moat") {
              militiaDiscardFirst2(card)
            } else {
              militiaDefend2(card)
            }
          }
      }
      // MILITIA DISCARD SECOND
      else if (militiaDiscardSecond) {
          if (
            !playerTurn &&
            player === "player2" &&
            hand2.length > 3
          ) {
            militiaDiscardSecond1(card)
          } else if (
            playerTurn &&
            player === "player1" &&
            hand1.length > 3
          ) {
            militiaDiscardSecond2(card)
          } else if (hand1.length <= 3 || hand2.length <= 3) {
            militiaBreak()
          }
      }
      // REMODEL ACTION OR VICTORY CARD
      else if (
        remodel &&
        (card.card_type === "Action" || card.card_type === "Victory")
      ) {
        if (player === "player1" && !playerTurn) {
          trashRemodel1(card)
        } else if (player === "player2" && playerTurn) {
          trashRemodel2(card)
        }
      }
    } 
    //SUPPLY CARD LOGIC
    else if (className === "supply-card") {
      // BUY SUPPLY CARD
      if (
        !remodelGain &&
        !workshop
      ) {
        if (
          !playerTurn &&
          buys1 > 0 &&
          card.cost <= wallet1
        ) {
          buyCard1(card)
        } else if (
          playerTurn &&
          buys2 > 0 &&
          card.cost <= wallet2
        ) {
          buyCard2(card)
        }
      }
      // WORKSHOP GAIN CARD
      else if (
        workshop &&
        card.cost <= 4
      ) {
        if (!playerTurn) {
          gainWorkshop1(card)
        } else if (playerTurn) {
          gainWorkshop2(card)
        }
      }
      // REMODEL GAIN CARD
      else if (
        remodelGain &&
        card.cost <= remodelValue
      ) {
        if (!playerTurn) {
          gainRemodel1(card)
        } else if (playerTurn) {
          gainRemodel2(card)
        }
      }
    }
  }
  
  render() {
    const { index, id, card, player, playerTurn, className, militia, militiaDiscardSecond } = this.props
    return(
      <Fragment>
        {
          index === 0 
          ?
          <img src={
            id === "deck-card" || 
            (className === "hand-card" && !militia && !militiaDiscardSecond && 
            ((!playerTurn && player === "player2") ||
            (playerTurn && player === "player1"))) 
            ? 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxjXZTHcRqwUrA4nW09UvtRlXPGlhAZdOQC6_-s71LayIknwS" 
            : 
              card.picture} alt="oops" onClick={() => this.handleClick()} 
              onMouseEnter={
                className === "supply-card" ||
                (className === "hand-card" && !militia && !militiaDiscardSecond &&
                ((!playerTurn && player === "player1") ||
                (playerTurn && player === "player2")))
                ? 
                  () => this.props.hoverOn(this) 
                : 
                  null
              } 
              onMouseLeave={this.props.hoverOff} >
          </img> 
          : 
          <img src={
              id === "deck-card" ||
              (className === "hand-card" && !militia && !militiaDiscardSecond &&
              ((!playerTurn && player === "player2") ||
              (playerTurn && player === "player1"))) 
            ? 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxjXZTHcRqwUrA4nW09UvtRlXPGlhAZdOQC6_-s71LayIknwS" 
            :
            card.picture} alt="oops" className="rest" onClick={() => this.handleClick()} 
            onMouseEnter={
              className === "supply-card" || 
              (className === "hand-card" && !militia && !militiaDiscardSecond &&
              ((!playerTurn && player === "player1") ||
              (playerTurn && player === "player2")))
              ? 
                () => this.props.hoverOn(this) 
              : 
                null
            } 
            onMouseLeave={this.props.hoverOff}>
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
    cellar1, cellar2, isHovered, trash
  } = state.supply
  const { wallet1, buys1, turns1, actions1 } = state.playerOne
  const { wallet2, buys2, turns2, actions2 } = state.playerTwo

  return {

    isHovered,
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
    trash,


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
    },
    hoverOn: (card) => {
      dispatch({ type: "HOVER_ON", payload: card })
    },
    hoverOff: () => {
      dispatch({ type: "HOVER_OFF" })
    }
  }

}

export default connect(msp, mdp)(Card)