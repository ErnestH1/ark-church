import React from 'react'
import Logo from '../assets/logo-07.png'
import './css/style.css'
// import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <img src={Logo} alt="logo" width={75} height={75} />
                </div>
            </nav>
        </>
    )
}

export default Navbar