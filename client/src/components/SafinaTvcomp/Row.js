import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';


function Row({ title, fetchURL }) {
    //Here is the State
    const [movies, setMovies] = useState([])
    //Here is the State
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.result);
        })
    }, [fetchURL]);
    //------------------------------------------------
    return (
        //This is a Row component
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
            </div>
        </>
        //This is a Row component
    )
}

export default Row