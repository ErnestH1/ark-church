import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/fi'

function Row({ title, fetchURL , rowID }) {
    //Here is the State
    const [movies, setMovies] = useState([])
    //Here is the State
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.result);
        })
    }, [fetchURL]);
    //------------------------------------------------
    const slideleft = () => {
        var slider = document.getElementById('slider'+rowID);
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }
    //------------------------------------------------
    return (
        //This is a Row component
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <TfiAngleLeft onClick={slideleft} className='bg-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-auto z-10 hidden group-hover:block' size={40} />
                <div id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <TfiAngleRight onClick={slideRight} className='bg-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-auto z-10 hidden group-hover:block' size={40} />
            </div>
        </>
        //This is a Row component
    )
}

export default Row