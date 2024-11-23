import React,{ useEffect, useState} from 'react'
import axios from 'axios'

function EffectHook() {
    const [id, setid] = useState(1)
    useEffect(() => {
       async function getdata() {
            let res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(res.data)
        }
        getdata()    
      return () => {
        console.clear()
      }
    }, [id])
    
  return (
    <div>
      <input type="number" onChange={(e) => setid(e.target.value)} value={id}  />      
    </div>
  )
}

export default EffectHook
