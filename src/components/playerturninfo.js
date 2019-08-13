import React from 'react'

function PlayerTurnInfo(props) {

  return(
    <div className="player-turn-info" >
      <div className="player-tag">{props.player}</div>
      <div className="player-actions">{`Actions: ${props.actions}`}</div>
      <div className="player-buys">{`Buys: ${props.buys}`}</div>
      <div className="player-wallet">{`Wallet: ${props.wallet}`}</div>
      <div className="player-vps">{`VPs: ${props.victoryPoints}`}</div>
      <div className="player-turns">{`Turns: ${props.turns}`}</div>
    </div>
  )
}


export default PlayerTurnInfo