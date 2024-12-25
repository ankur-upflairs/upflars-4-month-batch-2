import React from 'react'
import { Navigate } from 'react-router'

function ProtectedRoutes({roles,children}) {
    let token = localStorage.getItem('token')
    let role = localStorage.getItem('role')
    if(token){
        if(roles.includes(role)){
            return children
        }
        else{
            return <Navigate to='/' />
        }
    }
    else{
        return <Navigate to='/login' />
    }

}

export default ProtectedRoutes