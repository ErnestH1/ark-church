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
    console.log("Hey There i have a message for you God loves you")
    //Here is where the truncating function begins
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '... 💯';
        } else {
            return str;
        }
    }
    //Here is where the truncating function begins
    return (
        <div className='w-full h-[550px] text-white' >
            {/* For the Movie titles on the  */}
            {/* -------------------------------------------------------------------------- */}
            <div className='w-full h-full'>
                {/* <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'> */}
                    {/* This is the Gradient for the images to make it darker */}
                {/* </div> */}
                <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                    {/* For the Movie titles on the  */}
                    <h1 className='text-3xl md:text-5xl '>{movie?.title}</h1>
                    {/* For the Movie titles on the  */}
                    {/* -------------------------------------------------------------------------- */}
                    {/* Buttons and ... */}
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-3 px-5 '>Play</button>
                        <button className='border text-black border-gray-300 py-3 px-5 ml-4 '>Watch Later</button>
                    </div>
                    {/* Buttons and ... */}
                    {/* -------------------------------------------------------------------------- */}
                    {/* this p tag shows the date release */}
                    <p className='text-black text-sm'>Released:{movie?.release_date}</p>
                    {/* this p tag shows the date release */}
                    {/* -------------------------------------------------------------------------- */}
                    <p className='w-full text-black md:max-[70%] lg:max-[35%] '>Description:{truncateString(movie?.overview, 150)}</p>
                    {/* this p tag shows the date release */}
                    {/* -------------------------------------------------------------------------- */}
                </div>
            </div>
            {/* the outer div */}
        </div>
    )
}

export default Main