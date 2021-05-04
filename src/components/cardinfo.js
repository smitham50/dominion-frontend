import React from 'react';
import { connect } from 'react-redux';

const CardInfo = (props) => {
  const { card } = props.hoverCard.props;

  return (
    <div className="card-info" >
      <h4>{card.name}</h4>
      <p>{card.description}</p>
      <p>Cost: {card.cost}</p>
    </div>
  );
};

function msp(state) {
  const { hoverCard } = state.supply;

  return {
    hoverCard
  };
};

export default connect(msp, null)(CardInfo);