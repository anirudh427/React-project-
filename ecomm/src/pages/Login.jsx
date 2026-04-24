import React, { useState } from 'react';

import {Link, useNavigate} from 'react-router-dom'
import './Login.css'

function Login() {
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    const handleLogin = ()=>{
        let adminemail = 'admin@gmail.com'
        let adminpassword = 'admin123'
        if(!data.email||!data.password){
            alert("Fill all the collums")
            return
        }
        if (data.email===adminemail && data.password===adminpassword){
            localStorage.setItem('auth','true')
            localStorage.setItem('currentuser','admin')
            alert('Admin login successful')
            navigate('/admin')
            return
        }
        let users = JSON.parse(localStorage.getItem('Customer')) || []

        const validuser = users.find(item => item.email===data.email && item.password===data.password)

        if(validuser){
            localStorage.setItem('auth','true')
            localStorage.setItem('currentuser',JSON.stringify(validuser))
            alert('Login succesfull')
            navigate('/')
        }else{
            alert('Invalid email or password')
        }
    }
    return ( 
        <div className='box-1-log'>
            <h1>Login page</h1>
            <input type="email" name='email' onChange={handleChange} placeholder='Enter your email' className='input-box-1-log'/>
            <br />
            <input type="password" name='password' onChange={handleChange} placeholder='Enter your password' className='input-box-2-log'/>
            <br />
            <div className='button-div-1-log'>
                <button onClick={handleLogin} className='button-1-log'>Login</button>
            </div>
            <br />
            <p className='p-1-log'>Don't have an account?<Link to='/register'>Register</Link></p>
            <Link to='/' className='link-1-log'>Home</Link>
        </div>
     );
}

export default Login
