import React from 'react';
import SupplyCards from './SupplyCards';
import PlayerTurnInfo from '../components/PlayerTurnInfo';
import Button from '../StyledComponents/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Message = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  background: #fdb80e;
  color: white;
  border: solid 1px #4c4c4c;
  height: 100%;
  text-align: center;
`;

const InteractiveDiv = styled.div`
  height: 25%;
  background: #0000002b;

  & .cellar-button {
    background: #fdb80e;
  }
`;

const SupplyAreaContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;SupplyAreaContainer
`;

const Margin = styled.div`
  width: 7.5%;
  border: solid 1px #4c4c4c;
  border-radius: 3px;
`;

const GameEnd = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 200px;
  font-size: 5em;
  background: #d3e7e800;
  color: white;
`;

const SupplyArea = (props) => {
  const {
    actions1, buys1, wallet1, victoryPoints1, turns1, actions2,
    buys2, wallet2, victoryPoints2, turns2, playerTurn, endTurn1,
    endTurn2, cellar1, cellar2, gameEnd, militia, remodelGain,
    remodelValue, workshop, remodel, militiaDiscardSecond, mine,
    gameStart1, gameStart2, endCellar1, endCellar2 } = props;

  return (
    <SupplyAreaContainer>
      <Margin>
        <PlayerTurnInfo
          key="player1"
          player="Player 1"
          actions={actions1}
          buys={buys1}
          wallet={wallet1}
          victoryPoints={victoryPoints1}
          turns={turns1}
        />
        <InteractiveDiv>
          {
            cellar1
              ? <Button className="cellar-button" onClick={endCellar1} >End Discard</Button>
              : !playerTurn && remodel
                ? <Message>Trash card and gain card from supply worth up to 2 more</Message>
                : !playerTurn && remodelGain
                  ? <Message>Gain card from supply costing up to {remodelValue}</Message>
                  : !playerTurn && mine
                    ? <Message>Trash a treasure card for treasure costing up to 3 more</Message>
                    : !playerTurn && workshop
                      ? <Message>Gain card from supply costing up to 4</Message>
                      : playerTurn && (militia || militiaDiscardSecond)
                        ? <Message>Discard 2 cards or play Moat</Message>
                        : !playerTurn && !cellar1 && !gameEnd && gameStart1 && gameStart2 && (!militia && !militiaDiscardSecond)
                          && <Button onClick={endTurn1} >End Turn</Button>
          }
        </InteractiveDiv>
      </Margin>
      {
        gameEnd
          ? <GameEnd>
              {
                victoryPoints1 > victoryPoints2
                  ? "Player 1 Wins!"
                  : "Player 2 Wins!"
              }
            </GameEnd>
          : <>
              <SupplyCards />
            </>
      }
      <Margin>
        <PlayerTurnInfo
          key="player2"
          player="Player 2"
          actions={actions2}
          buys={buys2}
          wallet={wallet2}
          victoryPoints={victoryPoints2}
          turns={turns2}
        />
        <InteractiveDiv>
          {
            cellar2
              ? <Button className="cellar-button" onClick={endCellar2} >End Discard</Button>
              : playerTurn && remodel
                ? <Message>Trash card and gain card from supply costing up to 2 more</Message>
                : playerTurn && remodelGain
                  ? <Message>Gain card from supply costing up to {remodelValue}</Message>
                  : playerTurn && mine
                    ? <Message>Trash a treasure card for treasure costing up to 3 more</Message>
                    : playerTurn && workshop
                      ? <Message>Gain card from supply costing up to 4</Message>
                      : !playerTurn && (militia || militiaDiscardSecond)
                        ? <Message>Discard 2 cards or play Moat</Message>
                        : playerTurn && !cellar2 && !gameEnd && gameStart1 && gameStart2 && (!militia && !militiaDiscardSecond)
                          && <Button onClick={endTurn2} >End Turn</Button>
          }
        </InteractiveDiv>
      </Margin>
    </SupplyAreaContainer>
  );
};

function msp(state) {
  const { actions1, buys1, wallet1, victoryPoints1, turns1 } = state.playerOne
  const { actions2, buys2, wallet2, victoryPoints2, turns2 } = state.playerTwo
  const { playerTurn } = state.game
  const { cellar1, cellar2, gameEnd, militia, militiaDiscardFirst, 
          militiaDiscardSecond, workshopGain, remodelGain, remodelValue,
          workshop, remodel, mine, gameStart1, gameStart2 } = state.supply

  return {
    actions1,
    buys1,
    wallet1,
    victoryPoints1,
    turns1,
    gameStart1,

    actions2,
    buys2,
    wallet2,
    victoryPoints2,
    turns2,
    gameStart2,

    playerTurn,
    gameEnd,

    cellar1,
    cellar2,
    militia,
    militiaDiscardFirst,
    militiaDiscardSecond,
    workshopGain,
    workshop,
    remodel,
    remodelGain,
    remodelValue,
    mine
  }

}

function mdp(dispatch) {
  return {
    endTurn1: () => {
      dispatch({ type: "TURN1" })
    },
    endTurn2: () => {
      dispatch({ type: "TURN2" })
    },
    draw: () => {
      dispatch({ type: "DRAW1" })
    },
    endCellar1: () => {
      dispatch({ type: "END_CELLAR1" })
    },
    endCellar2: () => {
      dispatch({ type: "END_CELLAR2" })
    }
  }
}

export default connect(msp, mdp)(SupplyArea);