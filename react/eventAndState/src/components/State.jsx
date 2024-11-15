import React, { useState } from 'react'

function State() {
    const [count,setCount]=useState(0);
    //state (hooks) is used at the top of components
    //state is used to store the data
    //state cant be used  inside condition or loop
    //you cannot update the state directly
    //state is immutable
    //to change the state you have to use setCount (setstate function)
    //state perserve the value between re-renders

    let x=0;
    function increment(){
        x=x+1;
        setCount(count+1);
        console.log(x, count)    
    }
  return (
    <div>
      x={x} <br />
      count={count} <br />
      <button onClick={increment}>increment</button>
    </div>
  )
}
//friends list =>show only one friend  and add a button (showmore)

export default State

// show =1;
// friends.slice(0,show).map()
// showmore
//counter application => increment and decrement button





