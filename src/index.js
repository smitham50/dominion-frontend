import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import supplyReducer from './reducers/supplyreducer';
import gameReducer from './reducers/gamereducer';
import playerOneReducer from './reducers/playeronereducer';
import playerTwoReducer from './reducers/playertworeducer';

const rootReducer = combineReducers({
  supply: supplyReducer, 
  game: gameReducer, 
  playerOne: playerOneReducer, 
  playerTwo: playerTwoReducer
});

const store = createStore(rootReducer);
export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
