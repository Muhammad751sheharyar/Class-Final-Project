import React from 'react'
import './style.css'
function Signup() {
    // const[name,setName]=useSttate()
  return (
    <>
    <div className='Main'>
    <h1>Signup</h1>
        
      <input type="text"  placeholder='Name'/><br />
      
      <input type="email" placeholder='Email'/><br />
      
      <input type="password" placeholder='Password'/><br />
            <button>Signup</button>

    </div>
    </>
  )
}

export default Signup
