import React from 'react'
import Container from './Container'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Trusts = () => {
    return (
        <>
            <div className='pt-20 sm:pt-24 lg:pt-30 pb-24 sm:pb-28 lg:pb-35'>
                <Container>
                    {/* Trust indicators grid */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10'>
                        
                        {/* Free delivery section */}
                        <div className='flex flex-col items-center text-center'>
                            <div className='relative mb-4'>
                                {/* Animated ping ring */}
                                <div className='absolute inset-[-2px] rounded-full bg-[#363738] opacity-30 animate-ping-ring animation-delay-800'></div>
                                
                                <div className='relative bg-black rounded-full p-5'>
                                    <TbTruckDelivery className='w-10 h-10 sm:w-12 sm:h-12 text-white' />
                                </div>
                            </div>

                            <div className='pt-4 sm:pt-6'>
                                <h3 className='text-lg sm:text-xl font-semibold text-black mb-2'>FREE AND FAST DELIVERY</h3>
                                <p className='text-black text-sm'>Free delivery for all orders over $140</p>
                            </div>
                        </div>

                        {/* Customer service section */}
                        <div className='flex flex-col items-center text-center'>
                            <div className='relative mb-4'>
                                {/* Animated ping ring */}
                                <div className='absolute inset-[-2px] rounded-full bg-[#363738] opacity-30 animate-ping-ring animation-delay-800'></div>
                                
                                <div className='relative bg-black rounded-full p-5'>
                                    <TfiHeadphoneAlt className='w-10 h-10 sm:w-12 sm:h-12 text-white' />
                                </div>
                            </div>

                            <div className='pt-4 sm:pt-6'>
                                <h3 className='text-lg sm:text-xl font-semibold text-black mb-2'>24/7 CUSTOMER SERVICE</h3>
                                <p className='text-black text-sm'>Friendly 24/7 customer support</p>
                            </div>
                        </div>

                        {/* Money back guarantee section */}
                        <div className='flex flex-col items-center text-center'>
                            <div className='relative mb-4'>
                                {/* Animated ping ring */}
                                <div className='absolute inset-[-2px] rounded-full bg-[#363738] opacity-30 animate-ping-ring animation-delay-800'></div>
                                
                                <div className='relative bg-black rounded-full p-5'>
                                    <MdOutlineVerifiedUser className='w-10 h-10 sm:w-12 sm:h-12 text-white' />
                                </div>
                            </div>

                            <div className='pt-4 sm:pt-6'>
                                <h3 className='text-lg sm:text-xl font-semibold text-black mb-2'>MONEY BACK GUARANTEE</h3>
                                <p className='text-black text-sm'>We return money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Trusts