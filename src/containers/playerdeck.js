import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const PlayerDeckContainer = styled.div`
  border: solid 1px #4c4c4c;
  border-radius: 3px;
  width: 25%;
  height: 100%;
  display: flex;
  overflow: auto;
  padding-left: 0.5%;

  & img {
    height: 67%;
    margin-left: 0%;
    margin-top: 8%;
  }

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
              && <button onClick={() => handleDeal(player)}>Deal Cards</button>
      }
    </PlayerDeckContainer>
  );
};

export default PlayerDeck;