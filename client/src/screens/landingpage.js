import React from 'react'
import '../components/css/landing.css'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ArkChurch from '../components/arkChurch'
function Landingpage() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <ArkChurch/>
        <Footer/>
        </>
    )
}

export default Landingpage