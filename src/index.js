import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import supplyReducer from './supplyreducer'
import turnReducer from './turnreducer'
import gameReducer from './gamereducer'
import playerOneReducer from './playeronereducer'
import playerTwoReducer from './playertworeducer'


// const defaultState = {

// }

// function reducer(prevState=defaultState, action) {

//   switch(action.type) {
//     case "":
//       return {...prevState, }
//     default:
//       return prevState
//   }

// }

const store = createStore(reducer)

store.dispatch({type: "WHATEV"})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
