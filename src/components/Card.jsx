import React from 'react'
import { Rate } from 'antd';
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { CartReducer, removeWishListReducer, wishListReducer } from '../Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Bounce } from 'react-toastify'


const Card = ({ id, imgSrc, percentage, title, price, discountPrice, rating, review, productDetails, showActions = true, showDelete = false }) => {

    let navigate = useNavigate()

    const data = useSelector(state => state.products.Cart)
    const wishList = useSelector(state => state.products.WishList)

    const notify = (isAlreadyAdded) => {
        if (!isAlreadyAdded) {

            toast.success('Item Added Successfully!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }
        toast.warn('Item Already Added!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

    }

    const handleProductDetails = () => {
        navigate(`/productDetails/${id}`)
    }

    let dispatch = useDispatch()

    const handleAddToCart = () => {
        let matchItem = data.some((item) => item.id === id)

        matchItem ? notify(true) : (
            dispatch(CartReducer(productDetails)),
            notify(false)
        )

    }
    const handleAddWishList = () => {
        let matchItem = wishList.some((item) => item.id === id)

        matchItem ? notify(true) : (
            dispatch(wishListReducer(productDetails)),
            notify(false)
        )

    }

    const handleRemoveWishList = () => {
        dispatch(removeWishListReducer(id))
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





    return (
        <>
            <div className='group w-[270px] mx-auto group'>
                <div className='relative overflow-hidden  bg-secondary'>
                    <span className='absolute left-3 top-3 px-3 py-2 bg-primary rounded-sm text-white text-xs'>{percentage}%</span>
                    <img onClick={handleProductDetails} src={imgSrc} alt="" className='px-10 py-8.75' />
                    {showActions && <div className=' absolute top-3 right-3 space-y-2 '>
                        <div className=' text-2xl w-8.5 h-8.5 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white duration-150 ease-linear'>
                            <IoHeartOutline onClick={handleAddWishList} />
                        </div>
                        <div className='text-2xl w-8.5 h-8.5 flex items-center justify-center  bg-white rounded-full hover:bg-primary hover:text-white duration-150 ease-linear'>
                            <IoEyeOutline className='' />
                        </div>

                    </div>}
                    {showDelete && (
                        <button
                            type='button'
                            onClick={handleRemoveWishList}
                            title='Remove from wishlist'
                            aria-label='Remove from wishlist'
                            className='absolute top-3 right-3 text-2xl w-8.5 h-8.5 flex items-center justify-center bg-white rounded-full hover:bg-primary hover:text-white duration-150 ease-linear cursor-pointer'
                        >
                            <IoTrashOutline />
                        </button>
                    )}

                    <button onClick={handleAddToCart} className='absolute -bottom-11 bg-black w-full text-white font-medium py-2.25 group-hover:bottom-0  duration-150 ease-linear cursor-pointer hover:bg-gray-800'>Add to Cart</button>

                </div>
                <h3 className='mt-4 mb-2 font-medium'>{title}</h3>
                <div className='flex gap-3'>
                    <h4 className='text-primary font-medium'>${price}</h4>
                    <h4 className='text-[#0000008e] line-through font-medium'>${discountPrice}</h4>
                </div>
                <div className='flex gap-2'>
                    <Rate allowHalf value={rating} />
                    <h4 className='text-[#0000008e]'>({review})</h4>
                </div>
            </div>
        </>
    )
}

export default Card
