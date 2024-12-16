import React from 'react'
import { Link } from 'react-router'

function Blog({title,description,image,_id}) {
  return (
    <div style={{width:"30%"}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} alt="" /><br />
        <Link to={`/blog/${_id}`}>Read More</Link>
    </div>
  )
}

export default Blog