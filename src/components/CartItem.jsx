import React from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { removeReducer, incrementQuantity, decrementQuantity } from '../Slices/ProductSlice';
import { toast, Bounce } from 'react-toastify';

const CartItem = ({ imgSrc, title, price, id, quantity }) => {
    let dispatch = useDispatch()

    const handleRemoveCart = () => {
        dispatch(removeReducer(id))
        toast.error('Item Removed!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        })
    }

    const handleIncrement = () => {
        dispatch(incrementQuantity(id))
    }

    const handleDecrement = () => {
        dispatch(decrementQuantity(id))
    }

    const subTotal = (price * quantity).toFixed(2)

    return (
        <div className='mb-2'>
            {/* Flex layout identical to header */}
            <div className='group flex items-center px-4 sm:px-10 py-4 sm:py-6 rounded-sm shadow-sm hover:bg-gray-50 transition-colors duration-200'>
                
                {/* Product - 31% (Contains Delete button on mobile) */}
                <div className='relative flex items-center gap-2 sm:gap-5 w-[31%] pr-2 min-w-0'>
                    
                    {/* Delete Button - Visible on mobile, hover on desktop */}
                    <span 
                        onClick={handleRemoveCart} 
                        className='flex md:opacity-0 md:group-hover:opacity-100 justify-center items-center bg-red-500 size-4 md:size-5 rounded-full text-white text-xs md:text-md font-bold hover:bg-red-400 duration-200 cursor-pointer transition-opacity shrink-0 md:static'
                    >
                        <RxCross2 />
                    </span>

                    <img className='size-10 sm:size-13.5 object-contain shrink-0' src={imgSrc} alt="" />
                    <h4 className='text-sm sm:text-base truncate leading-none'>{title}</h4>
                </div>

                {/* Price - 23% */}
                <div className='w-[23%]'>
                    <h4 className='text-sm sm:text-base text-center leading-none'>${price}</h4>
                </div>

                {/* Quantity - 23% */}
                <div className='w-[23%]'>
                    <div className='flex justify-center items-center gap-1 border rounded-sm py-1.5 px-2 sm:px-3 w-fit mx-auto'>
                        <h4 className='text-sm sm:text-base leading-none'>{quantity}</h4>
                        <div>
                            <MdOutlineKeyboardArrowUp onClick={handleIncrement} className='cursor-pointer hover:text-primary text-xs sm:text-base' />
                            <MdOutlineKeyboardArrowDown onClick={handleDecrement} className='cursor-pointer hover:text-primary text-xs sm:text-base' />
                        </div>
                    </div>
                </div>

                {/* Subtotal - 23% */}
                <h4 className='w-[23%] text-right text-sm sm:text-base leading-none'>${subTotal}</h4>
            </div>
        </div>
    )
}

export default CartItem