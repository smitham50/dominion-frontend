import React from 'react'

function Card(props) {
  return(
    <div className="card">
      <img src={props.card.picture} alt="oops"></img>
    </div>
  )
}

export default Card