import React from 'react';
import weightlifting from '../images/weightlifting.jpg';
import { Link as ScrollLink} from 'react-scroll';

export default function Hero() {
  return (
    <div className='w-full h-screen flex relative py-6'>
        <div className='absolute top-0 left-0 w-full h-full'
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${weightlifting})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        />
        <div className='max-w-[1240px] p-8 mx-auto flex flex-col justify-center items-center relative'>
            <div className='text-white space-y-6'>
                <h1 className='font-staatliches text-2xl lg:text-4xl text-center'>Fuel Your Fitness Journey with Premium Supplements</h1>
                <h1 className='font-staatliches text-5xl lg:text-7xl text-center'>Welcome to FitFuel Emporium, Where Strength Begins!</h1>
            </div>
            <div className='mt-6'>
                <ScrollLink to="products" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>
                    <button className='bg-[rgb(1,99,163)] py-2 px-10 text-white font-staatliches text-3xl'>SEE OUR PRODUCTS</button>
                </ScrollLink>
            </div>
        </div>
    </div>
  )
}