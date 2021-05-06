import React from 'react';
import Card from '../components/Card';

const PlayerDiscard = (props) => {
  const renderDiscard = () => {
    return props.discard.map((card, index) => {
      return <Card key={card.id} card={card} index={index} className="discard-card" />
    });
  };

  return (
    <div className="player-discard" >
      {props.discard.length > 0 ? renderDiscard() : null}
    </div>
  );
};

export default PlayerDiscard;