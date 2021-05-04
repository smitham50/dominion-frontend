import React from 'react';

const PlayerTurnInfo = (props) => {

  return(
    <div className="player-turn-info" >
      <div className="player-tag"><h3>{props.player}</h3></div>
      <div className="player-actions">{`Actions: ${props.actions}`}</div>
      <div className="player-buys">{`Buys: ${props.buys}`}</div>
      <div className="player-wallet">{`Wallet: ${props.wallet}`}</div>
      <div className="player-vps">{`VPs: ${props.victoryPoints}`}</div>
    </div>
  );
};


export default PlayerTurnInfo;