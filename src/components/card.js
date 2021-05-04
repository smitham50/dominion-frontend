import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import handleHandCard from '../logic/handleHandCard';
import handleSupplyCard from '../logic/handleSupplyCard';

class Card extends React.Component {

  componentWillUnmount = () => {  
    if (!this.props.trash.includes(this.props.card)) {
      this.props.hoverOff() 
    }
  };

  handleClick = () => {
    const { className } = this.props

    if (className === "hand-card") {
      handleHandCard(this.props);
    } else if (className === "supply-card") {
      handleSupplyCard(this.props);
    }

  };
  
  render() {
    const { 
      index, id, card, player, playerTurn, 
      className, militia, militiaDiscardSecond 
    } = this.props
    
    return(
      <Fragment>
        {
          index === 0 
          ?
          <img id={`${card.name}`}src={
            id === "deck-card" || 
            (className === "hand-card" && !militia && !militiaDiscardSecond && 
            ((!playerTurn && player === "player2") ||
            (playerTurn && player === "player1"))) 
            ? 
              process.env.PUBLIC_URL + "/card-images/cardback.jpg" 
            : 
              process.env.PUBLIC_URL + card.picture} alt="oops" onClick={() => this.handleClick()} 
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
          <img id={`${card.name}`}src={
              id === "deck-card" ||
              (className === "hand-card" && !militia && !militiaDiscardSecond &&
              ((!playerTurn && player === "player2") ||
              (playerTurn && player === "player1"))) 
            ? 
              process.env.PUBLIC_URL + "/card-images/cardback.jpg" 
            :
            process.env.PUBLIC_URL + card.picture} alt="oops" className="rest" onClick={() => this.handleClick()} 
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
  };

};

function msp(state) {

  const { 
    playerTurn, deck1, deck2, hand1, hand2, mine, remodel, remodelGain, 
    remodelValue, workshop, militia, militiaDiscardFirst, militiaDiscardSecond,
    cellar1, cellar2, isHovered, trash
  } = state.supply;
  const { wallet1, buys1, turns1, actions1 } = state.playerOne;
  const { wallet2, buys2, turns2, actions2 } = state.playerTwo;

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

  };

};

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
  };

};

export default connect(msp, mdp)(Card);