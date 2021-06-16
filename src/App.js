import React from 'react';
import './stylesheets/App.css';
import PlayTable from './containers/PlayTable';
import styled from 'styled-components';

const AppContainer = styled.div`
  border: solid 1px #4c4c4c;
  border-radius: 3px;
  width: 100%;
  height: 100vh;

  & img {
    border-radius: 3px;
  }
`;

const App = (props) => {
  return (
    <AppContainer>
      <PlayTable />    
    </AppContainer>
  );
};

export default App;
