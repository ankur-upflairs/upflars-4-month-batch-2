import React, {useState, useEffect } from 'react'
import Blog from './Blog'
import axios from 'axios'
// export let blogData = [
//     {id:1, title:"pollution",description:"this blog is about pollution",image:"https://picsum.photos/200/300"},
//     {id:2, title:"technology",description:"this blog is about technology",image:"https://picsum.photos/200/300"},
//     {id:3, title:"environment",description:"this blog is about environment",image:"https://picsum.photos/200/300"},
// ]

function Blogs() {
  const [blogData, setblogData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/blogs')
    .then(res => {
      // console.log(res.data); 
      setblogData(res.data.data)})
  },[])
  return (
    <div>
        {blogData.map((el,i)=>{
            return <Blog key={i} title={el.title} description={el.description} image={el.image} _id={el._id} />
        })}
    </div>
  )
}

export default Blogs