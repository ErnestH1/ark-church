import React from 'react'
import '../components/css/hero.css'
import HeroImg from '../assets/pic/hero.png'
function Hero() {

    return (
        <div className='w-full h-screen relative'>
            <img src={HeroImg} alt="" className='w-full h-full object-cover' />
        </div>
    )
}

export default Hero

