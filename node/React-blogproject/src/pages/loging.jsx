import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

   async function handleSubmit(e) {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/users/login', data)
        if(res.data.status=='success'){
            localStorage.setItem('token',res.data.token)
        }
        else{
            alert(res.data.message)
        }
        console.log(res.data)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
