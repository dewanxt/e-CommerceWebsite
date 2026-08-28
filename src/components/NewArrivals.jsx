import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import PlayStation5 from '../assets/PlayStation5.png'
import WomensCollection from '../assets/WomensCollection.png'
import Speakers from '../assets/Speakers.png'
import Perfumes from '../assets/Perfumes.png'
import { useNavigate } from 'react-router'

const NewArrivals = () => {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <Container>
                    <div className='pt-10 lg:pt-30 pb-10 sm:pb-20 lg:pb-30'>
                        {/* Section header */}
                        <div>
                            <SecHead
                                title="Featured"
                                heading="New Arrival"
                            />
                        </div>

                        {/* Featured products grid */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-7.5 pt-6 sm:pt-10 lg:pt-15'>
                            
                            {/* PlayStation 5 - Full width on mobile, left column on desktop */}
                            <div className='relative overflow-hidden group'>
                                <img src={PlayStation5} alt="PlayStation 5" className='w-full h-[300px] sm:h-[400px] lg:h-full object-cover bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-105' />
                                
                                {/* Product details overlay */}
                                <div className='absolute inset-0 text-white flex flex-col justify-end p-6 sm:p-8 lg:p-0 lg:mt-100 lg:ml-7 lg:w-[242px] lg:justify-start space-y-2 sm:space-y-4 bg-gradient-to-t from-black/50 to-transparent lg:bg-none'>
                                    <h1 className='text-xl sm:text-2xl font-semibold'>PlayStation 5</h1>
                                    <p className='text-sm font-light'>Black and White version of the PS5 coming out on sale.</p>
                                    <span onClick={() => navigate("/shop")} className='text-base border-b-1 w-20 cursor-pointer hover:text-gray-300 transition-colors'>Shop Now</span>
                                </div>
                            </div>

                            {/* Right column - Stacked on mobile */}
                            <div className='space-y-4 sm:space-y-6 lg:space-y-7.5'>
                                
                                {/* Women's Collection */}
                                <div className='relative overflow-hidden group'>
                                    <img src={WomensCollection} alt="Women's Collections" className='w-full h-[250px] sm:h-[350px] lg:h-auto object-cover bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-105' />
                                    
                                    {/* Product details overlay */}
                                    <div className='absolute inset-0 text-white flex flex-col justify-end p-6 sm:p-8 lg:p-0 lg:mt-28 lg:ml-7 lg:w-64 lg:justify-start space-y-2 sm:space-y-4 bg-linear-to-t from-black/50 to-transparent lg:bg-none'>
                                        <h1 className='text-xl sm:text-2xl font-semibold'>Women's Collections</h1>
                                        <p className='text-sm font-light'>Featured woman collections that give you another vibe.</p>
                                        <span onClick={() => navigate("/shop")} className='text-base border-b w-20 cursor-pointer hover:text-gray-300 transition-colors'>Shop Now</span>
                                    </div>
                                </div>

                                {/* Speakers and Perfume - Side by side on tablet, stacked on mobile */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-7.5'>
                                    
                                    {/* Speakers */}
                                    <div className='relative overflow-hidden group'>
                                        <img src={Speakers} alt="Speakers" className='w-full h-[300px] sm:h-[250px] lg:h-auto object-cover bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-105' />
                                        
                                        {/* Product details overlay */}
                                        <div className='absolute inset-0 text-white flex flex-col justify-end p-4 sm:p-6 lg:p-0 lg:mt-37 lg:ml-6 lg:w-48 lg:justify-start space-y-1 sm:space-y-2 bg-gradient-to-t from-black/50 to-transparent lg:bg-none'>
                                            <h1 className='text-lg sm:text-2xl font-semibold'>Speakers</h1>
                                            <p className='text-xs sm:text-sm font-light'>Amazon wireless speakers</p>
                                            <span onClick={() => navigate("/shop")} className='text-sm sm:text-base border-b-1 w-20 cursor-pointer hover:text-gray-300 transition-colors'>Shop Now</span>
                                        </div>
                                    </div>

                                    {/* Perfume */}
                                    <div className='relative overflow-hidden group'>
                                        <img src={Perfumes} alt="Perfume" className='w-full h-[300px] sm:h-[250px] lg:h-auto object-cover bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-105' />
                                        
                                        {/* Product details overlay */}
                                        <div className='absolute inset-0 text-white flex flex-col justify-end p-4 sm:p-6 lg:p-0 lg:mt-37 lg:ml-6 lg:w-48 lg:justify-start space-y-1 sm:space-y-2 bg-gradient-to-t from-black/50 to-transparent lg:bg-none'>
                                            <h1 className='text-lg sm:text-2xl font-semibold'>Perfume</h1>
                                            <p className='text-xs sm:text-sm font-light'>GUCCI INTENSE OUD EDP</p>
                                            <span onClick={() => navigate("/shop")} className='text-sm sm:text-base border-b-1 w-20 cursor-pointer hover:text-gray-300 transition-colors'>Shop Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default NewArrivals