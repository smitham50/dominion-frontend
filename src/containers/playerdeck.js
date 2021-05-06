import React from 'react';
import Card from '../components/Card';

const PlayerDeck = (props) => {
  const {
    deck,
    player,
    turns,
    handleDeal
  } = props;

  const renderDeck = () => {
    return deck.map((card, index) => {
      return <Card key={card.id} card={card} index={index} id="deck-card" />
    });
  };

  return (
    <div className="player-deck" >
      {
        deck.length > 0
          ?
          renderDeck()
          :
          turns === 0
            ?
            <button onClick={() => handleDeal(player)}>Deal Cards</button>
            :
            null
      }
    </div>
  );
};

export default PlayerDeck;