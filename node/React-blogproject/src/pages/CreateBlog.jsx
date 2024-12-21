import axios from 'axios';
import React,{ useState} from 'react'

function CreateBlog() {
  const [data, setdata] = useState({
    title:"",
    description:"",
    image:""
  }  )
  function handleChange(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  async function handleSubmit(e){
    e.preventDefault();
    // console.log(data);
    let res = await axios.post('http://localhost:3000/blogs',data,{
      headers:{
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    });
    setdata({
      title:"",
      description:"",
      image:""
    })
    console.log(res.data)
  }
  return (
    <div>
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
            <input type="text" placeholder='Image' name='image'
            value={data.image} 
            onChange={handleChange} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateBlog