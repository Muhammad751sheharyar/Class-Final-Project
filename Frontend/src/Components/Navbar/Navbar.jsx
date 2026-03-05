import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>MyStore</h2>
            </div>

            <ul className="nav-links">
                {/* <li><Link to="/">Home</Link></li> */}
                {/* <li><Link to="Signup">About</Link></li>
                <li><Link to="Login">Contact</Link></li> */}
                
            </ul>

            <div className="nav-btn">
                {/* <button>Login</button> */}
            </div>
        </nav>
    )
}

export default Navbar