import React, { Fragment } from 'react'

function Card(props) {
  return(
    <Fragment>
      { props.index === 0 ? <img src={props.card.picture} alt="oops"></img> : <img src={props.card.picture} alt="oops" className="rest"></img> }
    </Fragment>
  )
}

export default Card