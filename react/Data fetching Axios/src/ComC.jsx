import React, { useContext } from 'react'
import { userContext } from './ContextHook'

function ComC() {
    let user = useContext(userContext)
    console.log(user)
  return (
    <div>
      
    </div>
  )
}

export default ComC
