import React, { useState } from 'react'
import Logo from '../assets/logo-07.png'
import './css/style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { ImCross} from 'react-icons/im'

function Navbar() {

    const [Mobile, setMobile] = useState(true)

    return (
        <nav className="navbar">
                <div className='logo'>
                    <Link to='/landingpage'>
                        <img src={Logo} className='logo' alt="logo" width={75} height={75} />
                    </Link>
                </div>
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <Link to='/Sermons'><li className='nav-items'>SERMONS</li></Link>
                    <Link to='/Giving'><li className='nav-items'>GIVING</li></Link>
                    <Link to='/Squads'><li className='nav-items'>SQUADS</li></Link>
                    <Link to='/Events'><li className='nav-items'>EVENTS</li></Link>
                    <Link to='/Contact'><li className='nav-items'>CONNECT</li></Link>
                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross/>:<FaBars/>}
                </button>
        </nav>
    )
}

export default Navbar