import React from 'react'
import '../components/css/hero.css'
import Slide from '../components/slide'
function Hero() {

    return (
        <section className='hero'>
        <Slide/>
            <div className="glitch-wrapper">
                <div className="glitch" data-glitch="ARK YOUTH CHURCH">ARK YOUTH CHURCH</div>
            </div>
        </section>
    )
}

export default Hero