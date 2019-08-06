import React from 'react'
import './App.css'
import PlayTable from './containers/playtable'
import Menu from './containers/menu'

class App extends React.Component {

  state = {
    cards: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cards')
    .then(resp => resp.json())
    .then(cards => {
      this.setState({
        cards: cards
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <PlayTable cards={this.state.cards} />
      </div>
    )
  }
}

export default App
