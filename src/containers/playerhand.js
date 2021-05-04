import React from 'react';
import Card from '../components/card';

const PlayerHand = (props) => {
  const renderHand = () => {
    return props.hand.map((card, index) => {
      return <Card key={card.id} card={card} index={index} player={props.player} className="hand-card" />
    });
  };

  return (
    <div className="player-hand" >
      {
        props.hand.length > 0
          ?
          renderHand()
          :
          props.turns === 0 && (!props.gameStart1 && !props.gameStart2) && props.deck.length > 0
            ?
            <button onClick={() => props.handleDraw()}>Draw Hand</button>
            :
            null
      }
    </div>
  );
};

export default PlayerHand;