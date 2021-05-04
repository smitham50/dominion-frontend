import React from 'react';
import Card from '../components/card';

const PlayerDeck = (props) => {
  const renderDeck = () => {
    return props.deck.map((card, index) => {
      return <Card key={card.id} card={card} index={index} id="deck-card" />
    });
  };

  const { deck, handleDeal, turns } = props;

  return (
    <div className="player-deck" >
      {
        deck.length > 0
          ?
          renderDeck()
          :
          turns === 0
            ?
            <button onClick={() => handleDeal()}>Deal Cards</button>
            :
            null
      }
    </div>
  );
};

export default PlayerDeck;