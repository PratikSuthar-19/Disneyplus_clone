import React, { useEffect, useState , useRef} from 'react'
import GlobalApi from '../Services/GlobalApi'
import Moviecard from './Moviecard'

import {HiChevronLeft,HiChevronRight }from "react-icons/hi2";

const MovieList = ({genreId}) => {

   const [movieList , setMovieList] = useState([])
    useEffect(()=>{
        getMovieByGenreId();
    })
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const elementRef = useRef();

    const sliderLeft = (element) =>{
          element.scrollLeft-=500;
    }

    
    const sliderRight = (element) =>{
        element.scrollLeft+=500
  }


  return (
    <div>
   

   <HiChevronLeft className='hidden md:block text-[white] text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className=' hidden md:block text-[white]  text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>

    

        
    <div  ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10' >
        {movieList .map((item)=>(
            <Moviecard movie={item}/>
        ))
        }
    </div>




    </div>
  )
}

export default MovieList