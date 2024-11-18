import React from 'react'

function Blog(props) {
    const {id,title,body}=props
    // console.log(props)
    //destructuring
    return (
      <div>
        <h3>{id}. {title}</h3>
        <p>{body}</p>
      </div>
    )
  }



// function Blog(props) {
    
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <p>{props.body}</p>
//     </div>
//   )
// }

export default Blog

