import React from 'react'
import HeroImg from '../../assets/pic/hero.png'
function Hero() {

    return (
        <div className='w-full h-auto relative'>
            <img src={HeroImg} alt="" className='mx-auto ' />
        </div>
    )
}

export default Hero

