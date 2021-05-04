import React from 'react'
import './stylesheets/App.css'
import './stylesheets/Supply.css'
import './stylesheets/Menu.css'
import PlayTable from './containers/playtable'
import Menu from './containers/menu'
import { Route, Switch } from "react-router-dom"

class App extends React.Component {

  render() {
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
    )
  }
} // end of App component


export default App
