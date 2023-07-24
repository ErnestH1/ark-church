import React from 'react'
import Pastor from '../assets/pic/7.jpg'
import Choir from '../assets/pic/2.jpg'
import Dance from '../assets/pic/1.jpg'
import Fun from '../assets/pic/17.jpg'
import Playfully from '../assets/pic/4.jpg'

function ArkChurch() {
    return (
        <div className='max-w-{1240px} mx-auto py-16 px-4 text-center'>
            {/* <h1>Ark Youth Church</h1> */}
            {/* <p>j</p> */}
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Pastor} alt="preaching" />
                <img className='w-full h-full object-cover' src={Choir} alt="preaching" />
                <img className='w-full h-full object-cover' src={Dance} alt="preaching" />
                <img className='w-full h-full object-cover' src={Fun} alt="preaching" />
                <img className='w-full h-full object-cover' src={Playfully} alt="preaching" />
            </div>
        </div>
    )
}

export default ArkChurch