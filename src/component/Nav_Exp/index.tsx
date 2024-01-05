'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/Img/ImgFT/Logo-1.svg'
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from 'react-icons/ai';
import { IoCartOutline } from "react-icons/io5";
import Img2 from '@/Img/Header-GreenHead.png';
import Img3 from '@/Img/NavWhite.png'
import { IoMenu } from "react-icons/io5";
import arrow from '@/Img/icons8-top-100.png'
import ScrollToTop from '../Scroll_Arrow';
import Link from 'next/link';
import Cart from '../Cart';
import HamburgerMenu from '../Hamburger_Menu';

type Props = {} & React.HTMLAttributes<HTMLElement>;
const Nav = ({ className, children, ...props }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    
    const handleCartClick = () => {
        setCartOpen(!cartOpen); // Toggle the cart dialog visibility
      };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className=''>
            <nav className='fixed md:block hidden'>
                <div className="">
                    <div className="relative z-10">
                        <Image
                            src={Img2}
                            alt="Design"
                            
                            className="w-screen object-cover"
                        />
                        <div className="absolute inset-2">
                            <div className="flex justify-between items-center mx-12 lg:mt-3 xl:mt-5 2xl:mt-8">
                                <Link href="/" ><Image
                                    src={logo}
                                    alt="logo"
                                    className="h-10 w-auto ml-6"
                                /></Link>
                                <div>
                                    <div className="ml-6 md:block hidden">
                                        <ul className="flex space-x-7 font-inter text-md font-medium lg:text-md xl:text-lg 2xl:text-xl">
                                            <li className=" font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300  "><a href="/">Home</a></li>
                                            <li
                                                className="relative group cursor-pointer transform transition-transform duration-300 "
                                                onMouseEnter={toggleDropdown}
                                                onMouseLeave={toggleDropdown}
                                            >
                                                <a href="#" className="font-sans text-black hover:text-red-500">Clothing</a>
                                                {showDropdown && (
                                                    <ul className="absolute top-5 left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2">
                                                        
                                                        <li><Link href="/List" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Newborn (0 m - 3 m)</Link></li>
                                                        <li><Link href="/List" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Girls (3 m - 6 y)</Link></li>
                                                        <li><Link href="/List" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Boys (3 m - 6 y)</Link></li>
                                                        
                                                    </ul>
                                                )}
                                            </li>
                                            <li><Link href="/List" className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 ">Toys</Link></li>
                                            <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><a href="#">About</a></li>
                                            <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center text-2xl">
                                    <Link href="/Wishlist"><div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-150"><IoMdHeartEmpty /></div></Link>
                                    <Link href="/Profile"><div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-green-500 cursor-pointer transform transition-transform duration-300 hover:scale-150"><AiOutlineUser /></div></Link>
                                    <div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-blue-600 cursor-pointer transform transition-transform duration-300 hover:scale-150" onClick={handleCartClick}><IoCartOutline /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cartOpen && <Cart/>}
            </nav>
            {/* <div className=''> */}
            <nav className='fixed md:hidden '>
                {/* min-[767px] */}
                <div className="relative z-10">
                    <div >
                        <Image
                            src={Img3}
                            alt="Nav_White"
                            className="w-screen h-20 object-cover"
                        />
                    </div>
                    <div className="absolute inset-0">
                        <div className="flex justify-between items-center m-4">
                            <div>
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="h-10 w-auto relative"
                                />
                            </div>
                            <div className="flex items-center text-2xl right-0 absolute">
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <Link href="/Wishlist"><div className="h-8 w-8 inline-flex justify-center items-center"><IoMdHeartEmpty /></div></Link>
                                </div>
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <Link href="/Profile"><div className="h-8 w-8 inline-flex justify-center items-center"><AiOutlineUser /></div></Link>
                                </div>
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                <div className="h-8 w-8 inline-flex justify-center items-center" onClick={handleCartClick}><IoCartOutline /></div>
                                </div>
                                <div className=''>
                                    <div className="h-10 w-10 inline-flex justify-center items-center"><HamburgerMenu/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image
                src={arrow}
                alt="scroll-up arrow"
                className="top-96 right-0 absolute"
            /> */}
           
                </div>
                {cartOpen && <Cart/>}
            </nav>
            <ScrollToTop />
        </div>
    );
};

export default Nav;
