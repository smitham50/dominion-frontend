import React, { Fragment } from 'react'
import SupplyCards from './SupplyCards'
import PlayerTurnInfo from '../components/PlayerTurnInfo'
import { connect } from 'react-redux'

class SupplyArea extends React.Component {

  handleClick1 = () => {
    this.props.endCellar1()
  }

  handleClick2 = () => {
    this.props.endCellar2()
  }

  render() {
    const { 
      actions1, buys1, wallet1, victoryPoints1, turns1, actions2, 
      buys2, wallet2, victoryPoints2, turns2, playerTurn, endTurn1,
      endTurn2, cellar1, cellar2, gameEnd, militia, remodelGain, 
      remodelValue, workshop, remodel, militiaDiscardSecond, mine,
      gameStart1, gameStart2 } = this.props
      
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
            {
              cellar1 
              ? 
              <button className="cellar-button" onClick={this.handleClick1} >End Discard</button> 
              : 
                !playerTurn && remodel
                ?
                <div className="message" >
                  Trash card and gain card from supply worth up to 2 more
                </div>
                : 
                  !playerTurn && remodelGain
                  ?
                  <div className="message" >
                    Gain card from supply costing up to {remodelValue}
                  </div>
                  :
                    !playerTurn && mine
                    ?
                    <div className="message">
                      Trash a treasure card for treasure costing up to 3 more
                    </div>
                    :
                      !playerTurn && workshop
                      ?
                      <div className="message" >
                        Gain card from supply costing up to 4
                      </div>
                      :
                        playerTurn && (militia || militiaDiscardSecond)
                        ?
                        <div className="message" >
                          Discard 2 cards or play Moat
                        </div>
                        :
                          !playerTurn && !cellar1 && !gameEnd && gameStart1 && gameStart2 && (!militia && !militiaDiscardSecond)
                          ? 
                          <button onClick={endTurn1} >End Turn</button> 
                          : 
                          null
            }
          </div>
        </div>
        {
          gameEnd 
          ?
          <div id="game-end">
            {
            victoryPoints1 > victoryPoints2
            ?
            "Player 1 Wins!"
            :
            "Player 2 Wins!"
            }
          </div>
          :
          <Fragment>
            <SupplyCards/>
          </Fragment>
        }
        <div className="margins" >
          <PlayerTurnInfo 
            key="player2"
            player="Player 2"
            actions={actions2}
            buys={buys2}
            wallet={wallet2}
            victoryPoints={victoryPoints2}
            turns={turns2}
          />
          <div className="end-turn" >
            {
              cellar2
                ?
                <button className="cellar-button" onClick={this.handleClick2} >End Discard</button>
                :
                playerTurn && remodel
                  ?
                  <div className="message" >
                    Trash card and gain card from supply costing up to 2 more
                  </div>
                  :
                  playerTurn && remodelGain
                    ?
                    <div className="message" >
                      Gain card from supply costing up to {remodelValue}
                    </div>
                    :
                      playerTurn && mine
                      ?
                      <div className="message">
                        Trash a treasure card for treasure costing up to 3 more
                      </div>
                      :
                        playerTurn && workshop
                          ?
                          <div className="message" >
                            Gain card from supply costing up to 4
                          </div>
                          :
                          !playerTurn && (militia || militiaDiscardSecond)
                            ?
                            <div className="message" >
                              Discard 2 cards or play Moat
                            </div>
                            :
                            playerTurn && !cellar2 && !gameEnd && gameStart1 && gameStart2 && (!militia && !militiaDiscardSecond)
                              ?
                              <button onClick={endTurn2} >End Turn</button>
                              :
                              null
            }
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

export default connect(msp, mdp)(SupplyArea)