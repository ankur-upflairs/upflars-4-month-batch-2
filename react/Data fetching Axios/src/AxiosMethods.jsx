import axios from 'axios'
import React, { useEffect } from 'react'
import { fetchData } from './axiosSetup'

function AxiosMethods() {
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>console.log(res.data))
        // async function getdata() {
        //     let res=await axios.get('https://jsonplaceholder.typicode.com/posts')
        //     console.log(res.data)
        // }
        // async function getdata() {
        //     let res=await axios.post('https://jsonplaceholder.typicode.com/posts',{
        //         email:'YVUdM@example.com',password:'123456'
        //     })
        //     console.log(res.data)
        // }
        async function getdata() {
            let data=await fetchData('/blog')
            console.log(data)
        }
        getdata()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default AxiosMethods
