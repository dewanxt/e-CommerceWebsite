import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { NavLink, useNavigate } from 'react-router'
import { useSelector } from 'react-redux';

const NavBar = () => {

    let navigate = useNavigate()

    const cart = useSelector(state => state.products.Cart)
    const wishList = useSelector(state => state.products.WishList)

    return (
        <div className='border-b-2'>
            <Container className=''>
                <div className='flex items-center justify-between py-7'>
                    <div>
                        <h1 className='text-3xl font-bold'>Exclusive</h1>
                        {/* <img src={Logo} alt="/Logo" /> */}
                    </div>
                    <ul className='flex gap-12 text-xl'>
                        <li onClick={() => navigate("/")} className='cursor-pointer relative group'>
                            Home
                            <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                        </li>
                        <li className='cursor-pointer relative group'>
                            Contact
                            <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                        </li>
                        <li className='cursor-pointer relative group'>
                            About
                            <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                        </li>
                        <li className='cursor-pointer relative group'>
                            Sign Up
                            <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                        </li>
                    </ul>
                    <div className='flex items-center gap-6'>
                        <div className='relative pl-5 py-2.5 bg-[#F5F5F5]'>
                            <input type="text" className='pr-17.5 focus:outline-none focus:ring-0' placeholder='What are you looking for?' />
                            <HiMiniMagnifyingGlass className='absolute top-2 right-3 text-2xl cursor-pointer' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <div onClick={() => navigate("/WishList")} className='relative cursor-pointer'>
                                <IoHeartOutline className='text-3xl' />
                                <span className='text-white bg-primary size-4 rounded-full text-xs flex justify-center items-center absolute bottom-5 left-5'>{wishList.length}</span>
                            </div>
                            <div onClick={() => navigate("/Cart")} className='relative cursor-pointer'>
                                <BsCart3 className='text-3xl' />
                                <span className='text-white bg-primary size-4 rounded-full text-xs flex justify-center items-center absolute bottom-5 left-5'>{cart.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavBar