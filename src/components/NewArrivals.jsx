import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import PlayStation5 from '../assets/PlayStation5.png'
import WomensCollection from '../assets/WomensCollection.png'
import Speakers from '../assets/Speakers.png'
import Perfumes from '../assets/Perfumes.png'


const NewArrivals = () => {
    return (
        <>
            <div className='boxss'>
                <Container>
                    <div className='pb-30'>
                        <div>
                            <SecHead
                                title="Featured"
                                heading="New Arrival"
                            />
                        </div>

                        <div className='flex gap-7.5 relative overflow-hidden pt-15'>
                            <div className=''>
                                <img src={PlayStation5} alt="" className=' w-full bg-cover bg-no-repeat ' />
                                <div className=' absolute inset-0 text-white mt-[446px] ml-8 w-[242px] space-y-4'>
                                    <h1 className='text-2xl font-semibold'>PlayStation 5</h1>
                                    <p className=' text-[14px] font-light' >Black and White version of the PS5 coming out on sale.</p>
                                    <p className='text-[16px] border-b-1 w-27 cursor-pointer'>Shop Now</p>
                                </div>
                            </div>

                            <div className='relative space-y-7.5'>
                                <div className='relative'>
                                    <div >
                                        <img src={WomensCollection} alt="" className=' w-full bg-cover bg-no-repeat ' />
                                    </div>
                                    <div className=' absolute inset-0 text-white mt-[138px] ml-6 w-[255px]  space-y-4'>
                                        <h1 className='text-2xl font-semibold' >Women’s Collections</h1>
                                        <p className=' text-[14px] font-light' >Featured woman collections that give you another vibe.</p>
                                        <p className='text-[16px] border-b-1 w-27 cursor-pointer'>Shop Now</p>
                                    </div>
                                </div>

                                <div className='flex gap-7.5'>
                                    <div className='relative'>
                                        <div className='relative overflow-hidden'>
                                            <img src={Speakers} alt="" className=' w-full bg-cover bg-no-repeat ' />
                                        </div>
                                        <div className=' absolute inset-0 text-white mt-[175px] ml-6 w-[191px] space-y-2'>
                                            <h1 className='text-2xl font-semibold' >Speakers</h1>
                                            <p className=' text-[14px] font-light' >Amazon wireless speakers</p>
                                            <p className='text-[16px] border-b-1 w-27 cursor-pointer'>Shop Now</p>
                                        </div>
                                    </div>

                                    <div className='relative'>
                                        <div>
                                            <img src={Perfumes} alt="" className=' w-full bg-cover bg-no-repeat ' />
                                        </div>
                                        <div className=' absolute inset-0 text-white mt-[175px] ml-6 w-[191px] space-y-2'>
                                            <h1 className='text-2xl font-semibold' >Perfume</h1>
                                            <p className=' text-[14px] font-light' >GUCCI INTENSE OUD EDP</p>
                                            <p className='text-[16px] border-b-1 w-27 cursor-pointer'> Shop Now</p>
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