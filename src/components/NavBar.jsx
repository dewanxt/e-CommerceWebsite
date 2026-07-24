import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";




const NavBar = () => {
    return (
        <>
            <Container>
                <div className='flex items-center justify-between py-7 px-33.75 border-b-3'>
                    <div>
                        <img src={Logo} alt="/Logo" />
                    </div>
                    <ul className='flex gap-12 text-xl'>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                    <div className='flex items-center gap-6'>
                        <div className='relative pl-5 py-2.5 bg-[#F5F5F5]'>
                            <input type="text" className='pr-17.5 focus:outline-none focus:ring-0' placeholder='What are you looking for?' />
                            <HiMiniMagnifyingGlass className=' absolute top-3 right-3 text-2xl top-2 ' />
                        </div>
                        <div className='flex items-center gap-4'>
                            <IoHeartOutline className='text-3xl' />
                            <BsCart3 className='text-3xl' />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default NavBar
