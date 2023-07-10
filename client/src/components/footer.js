import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { BsInstagram } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'


function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='sec aboutus'>
                        <h2>About Us</h2>
                        <p>Lorem Ipsum</p>
                        <ul className='sci'>
                            <li><a href="https://web.facebook.com/thearkyouthchurch"></a><FaFacebookSquare /></li>
                            <li><a href='https://api.whatsapp.com/send?phone=%2B254115042637&data=ARDZpwX_4l--k5HNoEfI55VA6pUA-QaehHUS56XidkyES7RTbW13rLgjXLEFw_5tzji4DNYeHmY5xwbpN7c60scz2YmtyVsWIBMyVgzyC2CbRciSGo9heB50Pbwt3aFeGGhCEi9_Gbg36-ORMLssxrX6nA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1Me5LqdWI2tdA5XwNYqr8THDPCI7CobfaUFWvZW5joJSNwJCqNfP5L06Q'></a><IoLogoTwitter /></li>
                            <li><a href='https://www.instagram.com/the_ark_youth_church/'></a><BsInstagram /></li>
                            <li><a href='https://www.youtube.com/@arkyouthchurch1740'></a><AiFillYoutube /></li>
                        </ul>
                    </div>
                    <div className='sec quicklinks'>
                        <h2>Support</h2>
                    </div>
                    <div className='sec quicklinks'>
                        <h1>Shop</h1>
                        <ul>
<li></li>
                        </ul>
                    </div>
                    <div className='sec contact'>
                        <h2>About Us</h2>

                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer


