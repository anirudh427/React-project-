import React from 'react';

import { Link,useNavigate } from 'react-router-dom';

import './Home.css'

function Home(){

    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem('auth')
        localStorage.removeItem('currentuser')
        alert('logout successful')
        navigate('/login')
    }
    return(
        <div className='home'>
            <div className='link-button-div-1-home'>
                <Link to='/register' className='link-1-home'><button className='button-1-home'>Register</button></Link>
                <br />
                <Link to='/login' className='link-2-home'><button className='button-2-home'>Login</button></Link>
                <br />
                <Link to='/products' className='link-3-home'><button className='button-3-home'>Products</button></Link>
                <br />
                <Link to='/cart' className='link-4-home'><button className='button-4-home'>Cart</button></Link>
                <br />
                <div className='button-div-1-home'>
                    <button onClick={logout} className='button-5-home'>Logout</button>    
                </div>
            </div>
            <h1 className='heading-1-home '>Welcome to ecomm</h1>
            <p className='p-1-home'>This is a home page</p>
        </div>
    )
}

export default Home