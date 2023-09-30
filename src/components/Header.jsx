import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import { HiHome,
                 HiMagnifyingGlass,
                HiStar,
        HiPlayCircle,
HiTv    } from "react-icons/hi2";

import { HiPlus ,HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';

const Header = () => {


   
       

        const items = [
                {name : "HOME",
                icon : HiHome}
                ,

                {name:"SEARCH",
                 icon:HiMagnifyingGlass
                },


                {name : "WATCHLIST",
                 icon:HiPlus
                },

                {name : "ORIGINALS",
                icon:HiStar
                },

                {name : "Movies",
                 icon :HiPlayCircle
                },
             { name:"SERIES",
                icon:HiTv
             }
        ]

        const[toggle , setToggle] = useState(false)

  return (
    <>
    <div className='flex  items-center justify-between  p-5'>
        <div className='flex gap-8 items-center'>
        <img src={logo} alt="logo " className='w-[18px] md:w-[115px] object-cover' />

        <div className='   hidden md:flex gap-8 items-center'>
        {items.map((item , index )=>( 
            <HeaderItem name={item.name} Icon = {item.icon}/>
        
        ))}

       </div>

       <div className='flex  md:hidden gap-5 items-center'>
        {items.map((item , index )=>(  index<3 &&
            <HeaderItem name={''} Icon = {item.icon}/>
        
        ))}
           </div>
        
        <div className='md:hidden ' onClick={()=>setToggle(!toggle)} >
        <HeaderItem name={''} Icon = {HiDotsVertical}/>
           {/* <div> */}
          { toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px]  border-gray-700 p-3 px-5 py-4'>
           {items.map((item , index )=>(  index>2 &&
            <HeaderItem name={item.name} Icon = {item.icon}/>
        
        ))} 

           {/* </div> */}
        </div> : null}

       </div>

        </div>

        <div className=' hidden md:block w-[45px] h-[40px] bg-red-700 rounded-full ml-[40rem] '>
            <h1 className='text-[14px] flex items-center justify-center mt-3 ' >P S</h1>
            
        </div>

         <div className=' md:hidden  sm:block w-[45px] h-[40px] bg-red-700 rounded-full  ml-[10rem]'>
            <h1 className='text-[14px] flex items-center justify-center mt-3 ' >P S</h1>
            
        </div>  



    </div>
    </>
  )
}

export default Header
    

   
  