import React from 'react'
import './style.css'
import { useState } from 'react'
function Login() {
// const[emai,setEmail]=useState()
// const[password,setPassword]=useState()

    return (
        <div className='Main'>
            <h1>Login</h1>
            <input type="email" placeholder='Email' /><br />
            <input type="password" placeholder='Password' /><br />  
            <button>Login</button>
            
              </div>
    )
}

export default Login
