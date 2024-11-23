import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AxiosMethods from './AxiosMethods'
import EffectHook from './EffectHook'
import ContextHook from './ContextHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <AxiosMethods/> */}
     {/* <EffectHook/> */}
     <ContextHook/>
    </>
  )
}

export default App
