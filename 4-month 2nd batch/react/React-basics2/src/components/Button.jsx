import React from 'react'
import './Button.css'
function Button() {
  return (
    <div>
      <button className='button'>Click</button>
      <br />
      <Button2/><br />
      <Button3/><br />
      <Button4/>
    </div>
  )
}

//when using inline styles - pass an object to style attribute
//change the name of properties to camelCase and remove the hyphens
//use them as key in the object
export function Button2() {
    return (
        <div>
      <button style={{
        padding: '15px 32px',
        backgroundColor: 'red',
        color: 'blue',
        fontSize: '20px',
        border: 'none',
        borderRadius: '5px'
      }} >Click</button>
    </div>
  )
}

let style={
    padding: '15px 32px',
    backgroundColor: 'maroon',
    color: 'white',
    fontSize: '20px',
    border: 'none',
    borderRadius: '15px'
  }
function Button3() {
    return (
        <div>
      <button style={style} >Click</button>
    </div>
  )
}
//using bootstrap
function Button4() {
    return (
        <div>
      <button className='btn btn-primary'>Click</button>
    </div>
  )
}
export default Button