import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import supplyReducer from './supplyreducer'
import turnReducer from './turnreducer'
import gameReducer from './gamereducer'
import playerOneReducer from './playeronereducer'
import playerTwoReducer from './playertworeducer'

const rootReducer = combineReducers({supply: supplyReducer, turn: turnReducer, game: gameReducer, playerOne: playerOneReducer, playerTwo: playerTwoReducer})

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
