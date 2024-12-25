import axios from 'axios'
import React, {useState} from 'react'
import Navbar from '../components/Navbar'

function Signup() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange(e) {
    setData({...data, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault()
   let res= await axios.post('http://localhost:3000/users/signup', data)
    console.log(res.data)
  }

  return (<>
  <Navbar />
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={data.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={data.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Signup</button>
    </form>
    </>
  )
}

export default Signup
