import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { blogData } from '../components/Blogs';
import Blog from '../components/Blog';
import axios from 'axios';

function SingleBlog() {
    const [blog, setblog] = useState({})
    // let params = useParams();
    let {id} = useParams();
    // let blog =blogData.find((el,i)=>el.id==id);
    useEffect(() => {
        axios.get(`http://localhost:3000/blogs/${id}`)
        .then(res => setblog(res.data))     
    }, [])
    
  return (
    <div>
        blog with id {id}
        <Blog title={blog.title} description={blog.description} image={blog.image} />
    </div>
  )
}

export default SingleBlog
