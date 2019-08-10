import React from 'react'
import ActionCards from './actioncards'
import TreasureCards from './treasurecards'
import VictoryCards from './victorycards'
import PlayerTurnInfo from '../components/playerturninfo'
import { connect } from 'react-redux'

class SupplyArea extends React.Component {
  render() {
    const { 
      actions1,
      buys1, 
      wallet1, 
      victoryPoints1, 
      turns1, 
      actions2, 
      buys2, 
      wallet2, 
      victoryPoints2, 
      turns2, 
      playerTurn,
      endTurn1,
      endTurn2 } = this.props
    
    return(
      <div id="supply-area">
        <div className="margins">
          <PlayerTurnInfo 
            key="player1"
            player="Player 1"
            actions={actions1}
            buys={buys1}
            wallet={wallet1}
            victoryPoints={victoryPoints1}
            turns={turns1}
          />
          <div className="end-turn">
            {playerTurn === false ? <button onClick={endTurn1} >End Turn</button> : null}
          </div>
        </div>
        <div id="tvcard-container">
          <TreasureCards />
          <VictoryCards />
        </div>
        <ActionCards />
        <div className="margins">
          <PlayerTurnInfo 
            key="player2"
            player="Player 2"
            actions={actions2}
            buys={buys2}
            wallet={wallet2}
            victoryPoints={victoryPoints2}
            turns={turns2}
          />
          <div className="end-turn">
            {playerTurn === true ? <button onClick={endTurn2}>End Turn</button> : null}
          </div>
        </div>
      </div>
    )
  }
}

function msp(state) {
  const { actions1, buys1, wallet1, victoryPoints1, turns1 } = state.playerOne
  const { actions2, buys2, wallet2, victoryPoints2, turns2 } = state.playerTwo
  const { playerTurn } = state.game

  return {
    actions1: actions1,
    buys1: buys1,
    wallet1: wallet1,
    victoryPoints1: victoryPoints1,
    turns1: turns1,

    actions2: actions2,
    buys2: buys2,
    wallet2: wallet2,
    victoryPoints2: victoryPoints2,
    turns2: turns2,

    playerTurn: playerTurn
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
    }

  }
}

export default connect(msp, mdp)(SupplyArea)