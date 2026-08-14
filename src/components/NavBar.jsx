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

    const data = useSelector(state => state.products.Cart)

    return (
        <div className='border-b-2'>
            <Container classname=''>
                <div className=' boxss flex items-center justify-between py-7  '>
                    <div>
                        <img src={Logo} alt="/Logo" />
                    </div>
                    <ul className='flex gap-12 text-xl'>
                        <li>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                    <div className='flex items-center gap-6'>
                        <div className='relative pl-5 py-2.5 bg-[#F5F5F5]'>
                            <input type="text" className='pr-17.5 focus:outline-none focus:ring-0' placeholder='What are you looking for?' />
                            <HiMiniMagnifyingGlass className='absolute top-2 right-3 text-2xl' />
                        </div>
                        <div className='flex items-center gap-4 '>
                            <IoHeartOutline className='text-3xl' />
                            <div onClick={()=> navigate("/Cart")} className='relative'>
                            <BsCart3 className='text-3xl' />
                            <span className='text-white bg-primary size-4 rounded-full text-xs flex justify-center items-center absolute bottom-5 left-5'>{data.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavBar
