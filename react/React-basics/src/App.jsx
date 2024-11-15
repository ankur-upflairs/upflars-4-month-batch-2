import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importing default exports
// import x from './Header.jsx'
// import y from './Header'
//importing named exports
// import {y,z} from './Header.jsx'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'



function App() {  

return (<div>
  <Header />
  <Content ></Content>
  <Footer />
</div>    
)
}





//functional or class components
  //functional components 
  //functional components are normal functions that return jsx
  //it's name starts with capital letter
  //to use a component then use it as a tag in jsx
//   function Header() {
//     return (
//       <div className='header'>
//         <h1>Header</h1>
//       </div>
//     )
//   }
//   function Footer() {
//     return (
//       <div >
//         <h1>Footer</h1>
//       </div>
//     )
//   }
//   function Content() {
//     return (
//       <div>
//         <h1>Content</h1>
//       </div>
//     )
//   }

// function App() {  

//   return (<div>
//     <Header />
//     <Content ></Content>
//     <Footer />
//   </div>    
//   )
// }
// function App() {
//   //jsx what is jsx
//   //java script xtension
//   //writting html inside javascript is jsx
//   //rules for jsx
//   //1.write complete jsx inside a single parent element
//   //jsx must be wrap inside a single tag
//   //every tag must be closed
//   //use className insteed of class
//   //{} curly bracket inside jsx
//   //writing javascript inside jsx
//    let name='jai'
//   let a=<h1>hello everyone  </h1>
  
//   let b=<div>
//     <p>name {name}</p>
//     <input type="text" ></input>
//     <br />
//   </div>

//   return (
//     <> 
//     {b}
//     {a}
//     </>
//   )
// }

export default App
