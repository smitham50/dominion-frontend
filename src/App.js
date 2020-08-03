import React from 'react'
import './App.css'
import './supply2.css'
import './Menu.css'
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
