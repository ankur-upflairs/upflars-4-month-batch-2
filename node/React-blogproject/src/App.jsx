import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Blogs from './components/Blogs.jsx'
import { BrowserRouter ,Routes , Route } from 'react-router'
import Home from './pages/Home.jsx'
import CreateBlog from './pages/CreateBlog.jsx'
import SingleBlog from './pages/SingleBlog.jsx'
import Login from './pages/loging.jsx'
import Signup from './pages/Signup.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='createblog' element={<ProtectedRoutes roles={['creator','user']}><CreateBlog /></ProtectedRoutes>} />
    <Route path='blog/:id' element={<SingleBlog />} />
    <Route path='login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
   </Routes>
   </BrowserRouter>    
    </>
  )
}

export default App
