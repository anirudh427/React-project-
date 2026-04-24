import React, { useState } from 'react';

import { Link,useNavigate} from 'react-router-dom';
import './Register.css'

function Register() {
    const [user,setUser]= useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = ()=>{
        if (!user.email||!user.password){
            alert("All fields are Required")
            return
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(user.email)) {
            alert("Enter valid email")
            return
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/

        if (!passwordPattern.test(user.password)){
            alert("Password must contain minimum 6 characters, one uppercase, on lowercase and one number")
            return
        }
        
        let users =  JSON.parse(localStorage.getItem('Customer')) || []

        const exist = users.find(item => item.email===user.email)
        if(exist){
            alert('User is already registered')
            return
        }
        users.push(user)

        localStorage.setItem('Customer',JSON.stringify(users))
        alert("Registration completed")
        navigate('/login')
    }
    return ( 
        <div className='box-1-reg'>
            <h1>Registration page</h1>
            <input type="email" name='email' onChange={handleChange} placeholder='Enter your email' className='input-box-1-reg'/>
            <br />
            <input type="password" name='password' onChange={handleChange} placeholder='Enter your password' className='input-box-2-reg'/>
            <br />
            <div className='button-div-1-reg'>
                <button onClick={handleSubmit} className='button-1-reg'>Register</button>
            </div>
            <br />
            <p className='p-1-reg'>You already have an account?<Link to='/login'>Login</Link></p>
            <Link to='/' className='link-1-reg'>Home</Link>
        </div>
     );
}

export default Register