import React, { useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

const TrashContainer = styled.div`
  width: 14%;
  border: solid 1px #4c4c4c;
  border-radius: 3px;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;

  & > img {
    height: 67%;
    margin-left: 0%;
    margin-top: 8%;
  }

  & .rest {
    margin-left: -47%;
  }
`;

const Trash = (props) => {
  const { trash, setTrash } = props;

  useEffect(() => {
    if (trash.length === 0) {
      axios.get('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
        .then(resp => {
          const cards = resp.data;
          setTrash(cards.filter(card => {
            return card.name === "Trash";
          }));
        });
    };
  }, []);

  const renderTrash = () => {
    return trash.map((card, index) => {
      return  <Card 
                key={card.id} 
                card={card} 
                index={index} 
              />
    });
  };

  return (
    <TrashContainer>
      {renderTrash()}
    </TrashContainer>
  );
};

function msp(state) {
  const { trash } = state.supply;

  return {
    trash: trash
  };
};

function mdp(dispatch) {
  return {
    setTrash: (trash) => {
      dispatch({ type: "TRASH", payload: trash })
    }
  };
};

export default connect(msp, mdp)(Trash);