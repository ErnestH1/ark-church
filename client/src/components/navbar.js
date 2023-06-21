import React from 'react'
import Logo from '../assets/logo-07.png'
import './css/style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className='container'>
                    <div className='logo'>
                        <img src={Logo} className='logo' alt="logo" width={75} height={75} />
                    </div>
                    <ul className='nav-links'>
                        <Link to='/Sermons'><li>SERMONS</li></Link>
                        <Link to='/Giving'><li>GIVING</li></Link>
                        <Link to='/Squads'><li>SQUADS</li></Link>
                        <Link to='/Events'><li>EVENTS</li></Link>
                        <Link to='/Contact'><li>Connect</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar