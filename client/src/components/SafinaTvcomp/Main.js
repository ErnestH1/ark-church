import React, { useEffect, useState } from 'react'
import requests from '../../Requests'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])
    //This function changes the sermons after every reload
    const movie = movies[Math.floor(Math.random() * movies.length)]
    //This function changes the sermons after every reload

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
            </div>
            {/* Buttons and ... */}
            <div>
                <button>Play</button>
                <button>Watch</button>
            </div>
            {/* Buttons and ... */}

        </div>
    )
}

export default Main