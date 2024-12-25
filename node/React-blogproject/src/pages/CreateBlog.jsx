import axios from 'axios';
import React,{ useState} from 'react'
import Navbar from '../components/Navbar';

function CreateBlog() {
  const [data, setdata] = useState({
    title:"",
    description:"",
  }  )
  const [image, setimage] = useState(null)
  function handleChange(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  async function handleSubmit(e){
    e.preventDefault();
    // console.log(data);
    let formdata = new FormData();
    formdata.append('title',data.title);
    formdata.append('description',data.description);
    formdata.append('image',image);
    let res = await axios.post('http://localhost:3000/blogs',formdata,{
      headers:{
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    });
    setdata({
      title:"",
      description:"",
    })
    setimage(null)
    console.log(res.data)
  }
  return (
    <div>
      <Navbar />
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
            <h3>Title</h3>
            <input type="text" placeholder='Title' name='title' value={data.title} 
            onChange={handleChange}
            />
            </label>
            <h3>Description</h3>
            <input type="text" placeholder='Description' name='description'
              value={data.description} 
             onChange={handleChange} />
            <h3>Image</h3>
            <input type="file" placeholder='Image' name='image'            
            onChange={(event)=>setimage(event.target.files[0])} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlog