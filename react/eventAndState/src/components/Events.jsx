import React from 'react'

function Events() {
    function changeColor(e,name) {
        // alert('button clicked')
        // console.log(e.target)
        // e.target.style.backgroundColor='red'
        alert(name)
    }
  return (
    <div>
    {/* <button onClick={changeColor} >click</button>   */}
    <button onClick={(e)=>{changeColor(e,'chirag')}}>click here</button>
    </div>
  )
}

export default Events
