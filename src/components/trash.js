import React, { useEffect } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import axios from 'axios';

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
      return <Card key={card.id} card={card} index={index} />
    });
  };

  return (
    <div id="trash" >
      {renderTrash()}
    </div>
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