import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { FaBowlFood, FaFlagUsa, FaRegNewspaper } from "react-icons/fa6";
import weightlifting2 from '../images/weightlifting2.jpg';

export default function Info() {
  return (
    <div className='bg-black w-full h-auto py-8'>
       <div className='max-w-[1240px] mx-auto flex w-full items-center px-8'>
            <div className='md:w-[50%] flex flex-col justify-between mx-auto w-full'>
                <div className='flex items-center py-4'>
                    <FaBowlFood size={30} className='text-[rgb(1,99,163)]'/>
                    <h1 className='text-3xl lg:text-5xl mx-auto font-staatliches text-white'>HIGH QUALITY INGREDIENTS</h1>
                </div>
                <div className='flex items-center py-4'>
                    <GiCheckMark size={30} className='text-[rgb(1,99,163)]'/>
                    <h1 className='text-3xl lg:text-5xl mx-auto font-staatliches text-white'>CLINICALLY DOSED</h1>
                </div>
                <div className='flex items-center py-4'>
                    <FaRegNewspaper size={30} className='text-[rgb(1,99,163)]'/>
                    <h1 className='text-3xl lg:text-5xl mx-auto font-staatliches text-white'>TRANSPARENT FOMULAS</h1>
                </div>
                <div className='flex items-center py-4'>
                    <FaFlagUsa size={30} className='text-[rgb(1,99,163)]'/>
                    <h1 className='text-3xl lg:text-5xl mx-auto font-staatliches text-white'>MADE IN THE USA</h1>
                </div>
            </div>
            <div className='hidden md:w-[50%] lg:flex lg:justify-end'>
                <img src={weightlifting2} alt="dumbbells" className='lg:h-[600px]'></img>
            </div>
       </div>
    </div>
  )
}

