import React, { useEffect, useState } from 'react'
import requests from '../../Requests'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])
    //This function changes the sermon after every reload
    const movie = movies[Math.floor(Math.random() * movies.length)]
    //This function changes the sermon after every reload

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie)
    return (
        <div className='w-full h-[550px] text-white' >
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                {/* the outer div */}
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    {/* Buttons and ... */}
                    <div>
                        <button className='border bg-gray-300 text-black border-gray-300 py-3 px-5 '>Play</button>
                        <button className='border bg-gray-300 text-black border-gray-300 py-3 px-5 ml-4 '>Watch Later</button>
                    </div>
                    {/* Buttons and ... */}
                </div>
                {/* the outer div */}
            </div>

        </div>
    )
}

export default Main