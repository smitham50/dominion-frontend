import React from 'react'
import './App.css'
import PlayTable from './containers/playtable'
import Menu from './containers/menu'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <PlayTable />
      </div>
    )
  }
}

export default App
