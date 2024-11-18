import React from 'react'
import blogData from './blogData'
import Blog from './Blog'

// function Blogs() {
//   return (
//     <>
//         {blogData.map((blog,index)=>{
//             // console.log(blog)
//         return <Blog key={blog.id} {...blog} />
//       })}
//       {/* {blogData.map((blog,index)=>{
//         return <Blog key={id} title={blog.title} body={blog.body} id={blog.id}/>
//       })} */}
//     </>
//   )
// }

function Blogs() {
  const [count,setCount]=React.useState(1)
  return (
    <>
        {blogData.slice(0,count).map((blog,index)=>{
            // console.log(blog)
        return <Blog key={blog.id} {...blog} />
      })}
     <button onClick={()=>setCount(count+1)}>increase</button>
    </>
  )
}




export default Blogs


