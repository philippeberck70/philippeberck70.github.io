import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <Link to="/">Home</Link>
            <nav className="nav">
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Navbar