import React from 'react'

function Card(props) {
  return (
    <div>
      <p>hello Mr. {props.name}</p>
      <p>Age is {props.age}</p>
    </div>
  )
}

export default Card
