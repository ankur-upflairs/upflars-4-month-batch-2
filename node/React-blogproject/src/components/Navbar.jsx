import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to={'/'} >Home</Link></li>
        <li><Link to={'/createblog'} >Create Blog</Link></li>
        <li><Link to={'/login'} >Login</Link></li>
        <li><Link to={'/Signup'} >Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
