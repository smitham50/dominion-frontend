import React from 'react'
import './App.css'
import './Supply.css'
import './Menu.css'
import PlayTable from './containers/playtable'
import Menu from './containers/menu'
import { connect } from 'react-redux'
import { Route, Switch, Link } from "react-router-dom"

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
