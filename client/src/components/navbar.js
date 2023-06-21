import React from 'react'
import Logo from '../assets/logo-07.png'
import './css/style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Navbar() {
    return (
            <nav className="navbar">
                <div className='container'>
                    <div className='logo'>
                        <Link to='/landingpage'>
                            <img src={Logo} className='logo' alt="logo" width={75} height={75} />
                        </Link>
                    </div>
                    <ul className='nav-links'>
                        <Link to='/Sermons'><li className='nav-items'>SERMONS</li></Link>
                        <Link to='/Giving'><li className='nav-items'>GIVING</li></Link>
                        <Link to='/Squads'><li className='nav-items'>SQUADS</li></Link>
                        <Link to='/Events'><li className='nav-items'>EVENTS</li></Link>
                        <Link to='/Contact'><li className='nav-items'>CONNECT</li></Link>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar