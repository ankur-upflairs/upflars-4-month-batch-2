import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Dashboard/Sidebar'
import Testj from './Testj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Sidebar /> */}
     <Testj />
    </>
  )
}

export default App