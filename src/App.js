import React from 'react';
import './stylesheets/App.css';
import './stylesheets/Supply.css';
import './stylesheets/Menu.css';
import PlayTable from './containers/PlayTable';
import Menu from './containers/Menu';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const App = (props) => {
  return (
    <AppContainer>
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
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  border: solid 1px #4c4c4c;
  border-radius: 3px;
  width: 100%;
  height: 100vh;
`;
