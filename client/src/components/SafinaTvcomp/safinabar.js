import React from 'react'

function Safinabar() {
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute' >
        <h1 className='text-white text-4xl font-medium font-mono cursor-pointer'>SAFINA TV</h1>
            <div>
                <button className='text-black pr-4'>Sign In</button>
                <button className='bg-red-200 px-6 py-2 rounded cursor-pointer text-black '>sign up</button>

            </div>
        </div>
    )
}

export default Safinabar