import React from 'react'
import Container from './Container'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Trusts = () => {
    return (
        <>
            <div className=' boxss pt-30 pb-35 '>
                <Container>
                
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                            {/* {Delivery-Part-Start} */}
                            <div className='flex flex-col items-center text-center'>
                                <div className='relative mb-4'>
                                    {/* {Animation-ping-ring} */}
                                    <div className='absolute inset-[-2px] rounded-full bg-[#363738] opacity-30  animate-ping-ring animation-delay-800'></div>

                                    <div className='relative bg-black rounded-full p-5'>
                                        <TbTruckDelivery className='w-12 h-12 text-white' />
                                    </div>

                                </div>

                                <div className='pt-6'>
                                    <h3 className='text-xl font-semibold text-black mb-2'>FREE AND FAST DELIVERY</h3>
                                    <p className='text-black text-[14px] '>Free delivery for all orders over $140</p>
                                </div>
                            </div>
                            {/* {Delivery-Part-End} */}

                            {/* {Service-Part-Start} */}

                            <div className='flex flex-col items-center text-center'>
                                <div className='relative mb-4'>
                                    {/* {Animation-ping-ring} */}
                                    <div className='absolute inset-[-2px] rounded-full bg-[#363738] opacity-30  animate-ping-ring animation-delay-800'></div>

                                    <div className='relative bg-black rounded-full p-5'>
                                        <TfiHeadphoneAlt className='w-12 h-12 text-white' />
                                    </div>

                                </div>

                                <div className='pt-6'>
                                    <h3 className='text-xl font-semibold text-black mb-2'>24/7 CUSTOMER SERVICE</h3>
                                    <p className='text-black text-[14px]'>Friendly 24/7 customer support</p>
                                </div>

                            </div>
                            {/* {Service-Part-End} */}

                            {/* {Guarantee-Part-Start} */}

                            <div className='flex flex-col items-center text-center'>
                                <div className='relative mb-4'>
                                    {/* {Animation-ping-ring} */}
                                    <div className='absolute inset-[-2px] rounded-full bg-[#363738] opacity-30  animate-ping-ring animation-delay-800'></div>

                                    <div className='relative bg-black rounded-full p-5'>
                                        <MdOutlineVerifiedUser className='w-12 h-12 text-white' />
                                    </div>

                                </div>

                                <div className='pt-6'>
                                    <h3 className='text-xl font-semibold text-black mb-2'>MONEY BACK GUARANTEE</h3>
                                    <p className='text-black text-[14px]'>We return money within 30 days</p>
                                </div>
                                {/* Guarantee-Part-End */}
                            </div>
                        </div>

                </Container>
            </div>
        </>
    )
}

export default Trusts
