import React from 'react';
import Card from '../components/Card';

const PlayerHand = (props) => {
  const { 
    player, 
    deck, 
    handleDraw, 
    turns, 
    hand 
  } = props;

  const renderHand = () => {
    return hand.map((card, index) => {
      return <Card key={card.id} card={card} index={index} player={player} className="hand-card" />
    });
  };

  return (
    <div className="player-hand" >
      {
        hand.length > 0
          ?
          renderHand()
          :
          turns === 0 && deck.length > 0
            ?
            <button onClick={() => handleDraw(player)}>Draw Hand</button>
            :
            null
      }
    </div>
  );
};

export default PlayerHand;