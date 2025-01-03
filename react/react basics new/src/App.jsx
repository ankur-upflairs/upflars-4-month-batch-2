import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  './components/Header.jsx'
import Content,{Footer,x } from './components/Content.jsx'
import Blog from './components/Blog.jsx'
import Blogs from './components/Blogs.jsx'


function App() {
 

  return (
    <>
    {/* <Header></Header>
    <Content/>
    <Footer/>
    {x} */}
    {/* <Blog title="hello" body="good morning" />
    <Blog title="pollution" body="air pollution" /> */}
    <Blogs/>
    </>
  )
}


// function App() {
//   //jsx => javascript xtension 
//   //writing html in js 
//   //jsx is a syntax extension of js
//   //every tag inside jsx must be closed
//   // complete jsx must be wrapped in a parent tag
//   //use classname instead of class
//   let x=<div>
//     <h1>good morning</h1>
//     <p>hello my name is shubham</p>
//     <input type="text" ></input>
//     <br/>
//   </div>
//   // {} in jsx 
//   //to write javascript code in jsx we use {}
//   // components=>  class components and functional components
//   // functional components =>  normal function that name starts with capital letter
//   //always return jsx in functional components
//   // to use functional component call it as a tag 
//   function Header(){
//     return <div>
//       <h1 className='heading'>good morning</h1>
//       <p>hello my name is shubham</p>
//       <img src="/hamburger.jpg" alt="" width={200} />
//       <br/>
//     </div>
//   }
//   function Content() {
//     return <div>
//       <h1>this is content</h1>
//       </div>
//   }
//   function Footer() {
//     return <div>
//       <h1>this is footer</h1>
//       </div>
//   }

//   return (
//     <>
//     <Header></Header>
//     <Content/>
//     <Footer/>
//     </>
//   )
// }

export default App
