import React from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const CartItem = ({ imgSrc, title, price, subTotal}) => {
    return (
        <div>
            <div className='flex items-center px-10 py-6 rounded-sm shadow-sm'>
                <div className='flex items-center gap-5 w-[31.5%]'>
                    <img className='size-13.5' src={imgSrc} alt="" />
                    <h4>{title}</h4>
                </div>
                <div className=' w-[30%]'>
                <h4>{price}</h4>
                </div>
                <div className='w-[33.5%]'>
                <div className='flex justify-center items-center gap-1 border rounded-sm py-1.5 px-3 w-18'>
                    <h4>01</h4>
                    <div>
                        <MdOutlineKeyboardArrowUp />
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
                </div>
                <h4 className='flex-end'>${subTotal}</h4>
            </div>
        </div>
    )
}

export default CartItem
