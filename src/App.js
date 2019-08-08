import React from 'react'
import './App.css'
import './Supply.css'
import PlayTable from './containers/playtable'
import Menu from './containers/menu'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cards')
    .then(resp => resp.json())
    .then(cards => {
      this.props.setCards(cards)
    })
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <PlayTable />
      </div>
    )
  }
} // end of App component

function msp(state) {

  return {

  }
}

function mdp(dispatch) {
  return {
    setCards: (cards) => {
      dispatch({type: "CARDS", payload: cards})
    }
  }
}

export default connect(msp, mdp)(App)
