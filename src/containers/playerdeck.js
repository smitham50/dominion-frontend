import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import Button from '../StyledComponents/Button';

const PlayerDeckContainer = styled.div`
  width: 25%;

  & .rest {
    margin-left: -63%;
  }
`;

const PlayerDeck = (props) => {
  const {
    deck,
    player,
    turns,
    handleDeal
  } = props;

  const renderDeck = () => {
    return deck.map((card, index) => {
      return  <Card 
                key={card.id} 
                card={card} 
                index={index} 
                id="deck-card" 
              />
    });
  };

  return (
    <PlayerDeckContainer>
      {
        deck.length > 0
          ? renderDeck()
          : turns === 0
              && <Button onClick={() => handleDeal(player)}>Deal Cards</Button>
      }
    </PlayerDeckContainer>
  );
};

export default PlayerDeck;