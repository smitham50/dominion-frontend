import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CardInfoContainer = styled.div`
  width: 14%;
  height: 100%;
  background: #00000033;
  border: solid 1px #4c4c4c;
  border-radius: 3px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardInfo = (props) => {
  const { card } = props.hoverCard.props;

  return (
    <CardInfoContainer>
      <h4>{card.name}</h4>
      <p>{card.description}</p>
      <p>Cost: {card.cost}</p>
    </CardInfoContainer>
  );
};

function msp(state) {
  const { hoverCard } = state.supply;

  return { hoverCard };
};

export default connect(msp, null)(CardInfo);