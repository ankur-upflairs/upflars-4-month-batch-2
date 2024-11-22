import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectHook from './UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectHook />
    </>
  )
}

export default App
