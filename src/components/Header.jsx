import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import { Link as ScrollLink} from 'react-scroll';

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
      setOpen(!isOpen);
    }; 
  return (
      <div className="w-full bg-black relative z-10">
        <div className="h-24 max-w-[1240px] mx-auto flex items-center justify-between px-8 text-white">
          <h1 className='text-2xl lg:text-3xl font-staatliches'><Link to="/fitfuel">FitFuel Emporium</Link></h1>
          <ul className="hidden md:flex">
            <li className="p-4">
              <ScrollLink to="about" spy={true} smooth={true} offset={20} duration={500} className='cursor-pointer'>
                <h1>About Us</h1>
              </ScrollLink>
            </li>
            <li className="p-4">
              <ScrollLink to="products" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>
                <h1>Products</h1>
              </ScrollLink>
            </li>
            <li className="p-4">
              <Link to="/fitfuel/cart" className='flex space-x-3'>
                <BsCart4 size={20}/>
                <h1>Cart</h1>
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} color="white"/>
          </div>
        </div>
        <div>
          {isOpen && (
            <div className='text-white'>
              <ul className='flex flex-col justify-end border-b-2 border-white'>
                <li className="p-4 font-medium text-xl border-t-2 border-white text-right">
                  <ScrollLink to="about" spy={true} smooth={true} offset={20} duration={500} className='cursor-pointer'>
                    <h1>About Us</h1>
                  </ScrollLink>
                </li>
                <li className="p-4 font-medium text-xl border-b-2 border-t-2 border-white text-right">
                  <ScrollLink to="products" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>
                    <h1>Products</h1>
                  </ScrollLink>
                </li>
                <li className="p-4 font-medium text-xl flex items-center space-x-3 ml-auto">
                  <Link to="/fitfuel/cart" className='flex space-x-3'>
                    <BsCart4 size={20}/>
                    <h1>Cart</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div> 
      </div>
  )
}
