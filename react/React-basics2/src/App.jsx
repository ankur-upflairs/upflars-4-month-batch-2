import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Fragments from './components/Fragments'
import Card from './components/Card'
import Friends from './props/Friends'
import Friend from './props/Friend'

// favourite:true 
// product list  isHomeProduct : 'made in india' : 'imported'
//green : red 
//task isComplete :true 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Fragments/> */}
     {/* <Card name="Aman Prajapati" age="22"/>
     <Card name="Aayush Kumar" age="28"/>
     <Card name="Ankit Kumar" age="25"/> */}
     <Friends/>   

    </>
  )
}

export default App



