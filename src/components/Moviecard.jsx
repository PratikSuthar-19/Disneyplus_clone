import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Moviecard = ({movie}) => {
  return (
    
        <img src={IMAGE_BASE_URL+movie.poster_path} alt="img" className='w-[110px]  md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transaction-all duration-300 ease-in' />
   
  )
}

export default Moviecard