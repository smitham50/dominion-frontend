import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = (props) => {
  return (
    <div id="menu" >
      <div id="menu-list">
        <Link to="/playgame" onClick={props.startGame}>Start Game</Link>
        <Link to="/instructions" >Instructions</Link>
      </div>
    </div>
  );
};

function mdp(dispatch) {
  return {
    startGame: () => {
      dispatch({ type: "START" })
    }
  };
};

export default connect(null, mdp)(Menu);