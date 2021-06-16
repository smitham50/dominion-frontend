import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import Button from '../StyledComponents/Button';

const PlayerHandContainer = styled.div`
  width: 50%;

  & .rest {
    margin-left: -17%;
  }
`;

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
      return  <Card 
                key={card.id} 
                card={card} 
                index={index} 
                player={player} 
                className="hand-card" 
              />
    });
  };

  return (
    <PlayerHandContainer>
      {
        hand.length > 0
          ? renderHand()
          : turns === 0 && deck.length > 0
            && <Button onClick={() => handleDraw(player)}>Draw Hand</Button>
      }
    </PlayerHandContainer>
  );
};

export default PlayerHand;