import React from 'react';
import PlayerArea from './PlayerArea';
import SupplyArea from './SupplyArea';
import Trash from '../components/Trash';
import CardInfo from '../components/CardInfo';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PlayTableContainer = styled.div`
  border-radius: 3px;
  width: 100%;
  height: 90%;
  display: block;
`;

const PlayerAreaContainer = styled.div`
  border-radius: 3px;
  width: 100%;
  height: 36%;
  background: #0000002b;
  display: flex;
`;

const PlayTable = (props) => {
  return (
    <PlayTableContainer>
      <SupplyArea />
      <PlayerAreaContainer>
        <PlayerArea key="1" player="1" />
          {
            props.isHovered 
              ? <CardInfo key="card-info" /> 
              : <Trash />
          }
        <PlayerArea key="2" player="2" />
      </PlayerAreaContainer>
    </PlayTableContainer>
  );
};

function msp(state) {
  const { isHovered } = state.supply;

  return { isHovered };
};

export default connect(msp, null)(PlayTable);

