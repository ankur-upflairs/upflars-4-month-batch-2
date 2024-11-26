import React from 'react'
import { Link, Outlet } from 'react-router'

function Services() {
  return (
    <div>
        <ul>
            <li><Link to={'mobile'} >Mobile</Link></li>
            <li><Link to={'desktop'} >Desktop</Link></li>
            <li><Link to={''} >services</Link></li>
            <li><Link to={'tablet'} >Tablet</Link></li>
        </ul>
      this is service page
      <Outlet />
    </div>
  )
}


function Mobile() {
  return (
    <div>
      Mobile
    </div>
  )
}
function Desktop() {
    return (
      <div>
        Desktop
      </div>
    )
  }
  function Tablet() {
    return (
      <div>
        Tablet 
      </div>
    )
  }
export {Mobile,Desktop,Tablet}


export default Services
