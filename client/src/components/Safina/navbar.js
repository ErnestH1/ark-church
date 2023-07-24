//Don't touch this code if you you don't know what it does
import React, { useState } from 'react'
import Logo from '../../assets/logo/logo-07.png'
import '../../css/style.css'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FaUserCircle } from 'react-icons/fa'


function Navbar() {
    //The useState function is used to set the state of the Mobile variable
    const [Mobile, setMobile] = useState(false)
    //The useState function is used to set the state of the Mobile variable
    return (
        <nav className="navbar">
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} className='logo' alt="logo" />
                </Link>
            </div>
            {/* The links Start here */}
            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to='/SERMONS'><li className='nav-items hover-underline-animation'>SERMONS</li></Link>
                <Link to='/GIVING'><li className='nav-items hover-underline-animation'>GIVING</li></Link>
                <Link to='/SQUADS'><li className='nav-items hover-underline-animation'>SQUADS</li></Link>
                <Link to='/EVENTS'><li className='nav-items hover-underline-animation'>EVENTS</li></Link>
                <Link to='/PODCAST'><li className='nav-items hover-underline-animation'>PODCAST</li></Link>
                <Link to='/LOGIN'><li className='nav-items icons'><FaUserCircle /></li></Link>
            </ul>
            {/* The links End here */}
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}
export default Navbar

//Don't touch this code if you, you don't know what it does
