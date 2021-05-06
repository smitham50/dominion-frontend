import React from 'react';
import PlayerArea from './PlayerArea';
import SupplyArea from './SupplyArea';
import Trash from '../components/Trash';
import CardInfo from '../components/CardInfo';
import { connect } from 'react-redux';

const PlayTable = (props) => {
  return (
    <div id="play-table">
      <SupplyArea />
      <div id="player-area-container">
        <PlayerArea key="1" player="1" />
          {props.isHovered ? <CardInfo key="card-info" /> : <Trash />}
        <PlayerArea key="2" player="2" />
      </div>
    </div>
  );
};

function msp(state) {
  const { isHovered } = state.supply;

  return { isHovered };
};

export default connect(msp, null)(PlayTable);