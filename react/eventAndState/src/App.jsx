import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import State from './components/State.jsx'
import ToDo from './components/ToDo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Events/> */}
     {/* <State/> */}
     <ToDo/>
    </>
  )
}

export default App
