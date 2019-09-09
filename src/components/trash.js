import React from 'react'
import Card from './card'
import { connect } from 'react-redux'

class Trash extends React.Component {

  componentDidMount() {
    if (this.props.trash.length === 0) {
      fetch('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
        .then(resp => resp.json())
        .then(cards => {
          this.props.setTrash(cards.filter(card => {
            return card.name === "Trash"
          }))
        })
    }
  }

  renderTrash = () => {
    return this.props.trash.map((card, index) => {
      return <Card key={card.id} card={card} index={index} />
    })
  }

  render() {
    return(
      <div id="trash" >
        {this.renderTrash()}
      </div>
    )
  }
}

function msp(state) {

  const { trash } = state.supply

  return {
    trash: trash
  }

}

function mdp(dispatch) {
  return {
    setTrash: (trash) => {
      dispatch({ type: "TRASH", payload: trash })
    }
  }
}

export default connect(msp, mdp)(Trash)