import React from 'react';
import styled from 'styled-components';

const PlayerInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #0000002b;
  color: white;
  padding-left: 5%;
  flex-direction: column;
  height: 75%;
`;

const PlayerTag = styled.div`
  height: 9%;
`;

const InfoBox = styled.div`
  height: 7%;
`;

const PlayerTurnInfo = (props) => {
  const {
    player,
    actions,
    buys,
    wallet,
    victoryPoints
  } = props;

  return(
    <PlayerInfoContainer>
      <PlayerTag>
        <h3>{player}</h3>
      </PlayerTag>
      <InfoBox>{`Actions: ${actions}`}</InfoBox>
      <InfoBox>{`Buys: ${buys}`}</InfoBox>
      <InfoBox>{`Wallet: ${wallet}`}</InfoBox>
      <InfoBox>{`VPs: ${victoryPoints}`}</InfoBox>
    </PlayerInfoContainer>
  );
};


export default PlayerTurnInfo;