import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const PlayerDiscardContainer = styled.div`
  width: 25%;

  & .rest {
    margin-left: -63%;
  }
`;

const PlayerDiscard = (props) => {
  const renderDiscard = () => {
    return props.discard.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="discard-card" />
    });
  };

  return (
    <PlayerDiscardContainer>
      {
        props.discard.length > 0 && renderDiscard()
      }
    </PlayerDiscardContainer>
  );
};

export default PlayerDiscard;