import React from 'react'
import { Rate } from 'antd';
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";


const Cart = ({imgSrc, percentage, title, price, discountPrice, review}) => {
    return (
        <>
            <div className='w-67.5 group'>
                <div className='relative overflow-hidden'>
                    <span className='absolute left-3 top-3 px-3 py-2 bg-primary rounded-sm text-white text-xs'>{percentage}%</span>
                    <img src={imgSrc} alt="" />
                    <div className=' absolute top-3 right-3 space-y-2 '>
                        <div className=' text-2xl w-8.5 h-8.5 flex items-center justify-center bg-white rounded-full'>
                            <IoHeartOutline className='' />
                        </div>
                        <div className='text-2xl w-8.5 h-8.5 flex items-center justify-center  bg-white rounded-full'>
                            <IoEyeOutline className='' />
                        </div>

                    </div>

                    <button className='absolute -bottom-11 bg-black text-white font-medium w-full py-2.25 group-hover:bottom-0  duration-150 ease-linear cursor-pointer'>Add to Cart</button>

                </div>
                <h3 className='mt-4 mb-2 font-medium'>{title}</h3>
                <div className='flex gap-3'>
                    <h4 className='text-primary font-medium'>${price}</h4>
                    <h4 className='text-[#0000008e] line-through font-medium'>${discountPrice}</h4>
                </div>
                <div className='flex gap-2'>
                    <Rate allowHalf deafultvalue={5} />
                    <h4 className='text-[#0000008e]'>({review})</h4>
                </div>
            </div>
        </>
    )
}

export default Cart
