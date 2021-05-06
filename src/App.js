import React from 'react';
import './stylesheets/App.css';
import './stylesheets/Supply.css';
import './stylesheets/Menu.css';
import PlayTable from './containers/PlayTable';
import Menu from './containers/Menu';
import { Route, Switch } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/menu"
          render={() =>
            <Menu />
          }
        />
        <Route
          path="/"
          render={() =>
            <PlayTable />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
