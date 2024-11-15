import React from "react";
import './friends.css'
//age < 20 'not eligible'
//render text condtionally

function Friend(props) {
    const {name,age,email,city,image}=props
    return (
      <>
        <div className="card col" style={{ width: "18rem" }} >
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text text-center">
             Age-{age} <br />
             Email-{email} <br />
             City-{city}
             <p className={age<20?'not-eligible':'eligible'} >
             {age<20 ? 'not eligible to vote ':'eligible to vote'}
             </p>
             {/* <p style={{color:age<20?'red':'green'}}>
             {age<20 ? 'not eligible to vote ':'eligible to vote'}
             </p> */}
            </p>         
          </div>
        </div>
      </>
    );
  }
  



//image,name,age,email,city
// function Friend(props) {
//   return (
//     <>
//       <div className="card col" style={{ width: "18rem" }} >
//         <img src={props.image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title text-center">{props.name}</h5>
//           <p className="card-text text-center">
//            Age-{props.age} <br />
//            Email-{props.email} <br />
//            City-{props.city}
//           </p>         
//         </div>
//       </div>
//     </>
//   );
// }

export default Friend;
