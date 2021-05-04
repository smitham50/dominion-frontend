import React from 'react';
import PlayerDeck from './playerdeck';
import PlayerDiscard from './playerdiscard';
import PlayerHand from './playerhand';
import { connect } from 'react-redux';

const PlayerTwoArea = (props) => {
  const handleDeal = () => {
    props.deal();
  };

  const handleDraw = () => {
    props.draw();
  };

  const handleCycle = () => {
    props.cycle();
  };

  const { hand2, discard2, deck2, turns2, gameStart2 } = props;

  return (
    <div id="player-two-area" >
      <PlayerHand key="hand2" hand={hand2} handleDraw={handleDraw} player="player2" turns={turns2} gameStart2={gameStart2} deck={deck2} />
      <PlayerDeck key="deck2" deck={deck2} handleDeal={handleDeal} turns={turns2} handleCycle={handleCycle} />
      <PlayerDiscard key="discard2" discard={discard2} />
    </div>
  );
};

function msp(state) {
  const { coppers, estates, deck2, discard2, hand2, gameStart2 } = state.supply;
  const { turns2 } = state.playerTwo;

  return {
    coppers,
    estates,
    deck2,
    discard2,
    hand2,
    turns2,
    gameStart2
  };
};

function mdp(dispatch) {
  return {
    deal: () => {
      dispatch({ type: "DEAL2" })
    },
    draw: () => {
      dispatch({ type: "DRAW2" })
    },
    cycle: () => {
      dispatch({ type: "CYCLE2" })
    }
  };
};

export default connect(msp, mdp)(PlayerTwoArea);