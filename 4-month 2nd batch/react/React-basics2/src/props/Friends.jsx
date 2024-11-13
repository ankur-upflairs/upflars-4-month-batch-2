import React from 'react'
import Friend from './Friend'


let friendsData=[
    {name:'Aman',age:'19',email:'FZ0r6@example.com',city:'Noida',image:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {name:'Aayush',age:'28',email:'FZ0r6@example.com',city:'Noida',image:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {name:'Ankit',age:'25',email:'FZ0r6@example.com',city:'Noida',image:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {name:'Gagan',age:'18',email:'FZ0r6@example.com',city:'Agra',image:'https://cdn.britannica.com/16/194916-050-7EAA3BCB/Air-pollution-Shanghai.jpg?w=300'},   
    {name:'Gagan',age:'23',email:'FZ0r6@example.com',city:'Agra',image:'https://cdn.britannica.com/16/194916-050-7EAA3BCB/Air-pollution-Shanghai.jpg?w=300'} ,
    
]

function Friends() {
    return (
      <div className='row row-col-4'>
         {friendsData.map((friend,i)=>{
            return <Friend key={i} {...friend} />
         })}          
      </div>
    )
  }



// function Friends() {
//     return (
//       <div>
//        {/* <Friend name={friendsData[0].name} age={friendsData[0].age} email={friendsData[0].email} city={friendsData[0].city} image={friendsData[0].image} /> */}
//        {/* <Friend {...friendsData[0]} />
//        <Friend {...friendsData[1]} />
//        <Friend {...friendsData[2]} />
//        <Friend {...friendsData[3]} /> */}

//       </div>
//     )
//   }


// function Friends() {
//   return (
//     <div>
//       {/* <Friend name={'Aman'} age={'22'} email={'FZ0r6@example.com'} city={'Noida'} image={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
//       <Friend name={'Aayush'} age={'28'} email={'FZ0r6@example.com'} city={'Noida'} image={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} /> */}
//     </div>
//   )
// }

export default Friends
