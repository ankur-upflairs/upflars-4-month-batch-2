import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from './blog.json'
function blog() {
    const { id } = useParams();
    // console.log(blogs)
    const blog = blogs.find(blog => blog.id == id)
  return (
    <div>
        {blog.title}
    </div>
  )
}

export default blog
