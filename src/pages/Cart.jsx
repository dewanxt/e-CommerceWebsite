import React from 'react'
import Container from '../components/Container'
import BreadCrump from '../components/BreadCrump'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Cart = () => {
  const navigate = useNavigate();

  // Removed undefined closeMenu() function
  const handleNavigation = (path) => {
    navigate(path);
  };

  const data = useSelector(state => state.products.Cart)

  const subtotal = data.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);

  return (
    <div className='mt-20 mb-35 px-4 sm:px-0'> {/* Added side padding for mobile */}
      <Container>
        <div>
          <BreadCrump />

          <div className='mt-10 md:mt-20'>
            
            {/* RESPONSIVE TABLE HEADER (Visible on ALL screens) */}
            <div className='flex items-center px-4 sm:px-10 py-6 rounded-sm shadow-sm'>
              <h4 className='w-[31%] text-sm sm:text-base'>Product</h4>
              
              {/* REMOVED 'hidden sm:block' - Now always visible */}
              <div className='w-[23%] text-center'>
                <h4 className='text-sm sm:text-base'>Price</h4>
              </div>
              
              <div className='w-[23%] text-center'>
                <h4 className='text-sm sm:text-base'>Quantity</h4>
              </div>
              
              <div className='w-[23%] text-right'>
                <h4 className='text-sm sm:text-base'>Subtotal</h4>
              </div>
            </div>

            {/* Cart Items */}
            <div className='mt-4 md:mt-0'>
              {data.map((item) => (
                <CartItem
                  key={item.id}
                  imgSrc={item.thumbnail}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity || 1}
                />
              ))}
            </div>
          </div>

          <div>
            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-6'>
              <button 
                onClick={() => navigate("/shop")} 
                className='w-full sm:w-auto border border-gray-400 font-semibold px-12 py-4 rounded-sm cursor-pointer hover:bg-gray-100 duration-200'
              >
                Return To Shop
              </button>
              <button className='w-full sm:w-auto border border-gray-400 font-semibold px-12 py-4 rounded-sm cursor-pointer hover:bg-gray-100 duration-200'>
                Update Cart
              </button>
            </div>

            {/* Coupon and Cart Total */}
            <div className='flex flex-col lg:flex-row justify-between gap-10 pt-20'>
              
              {/* Coupon Code */}
              <div className='w-full lg:w-1/2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4'>
                <input 
                  type="text" 
                  placeholder='Coupon Code' 
                  className='flex-1 border pl-6 pr-4 py-4 text-xl outline-none rounded-md' 
                />
                <button className='bg-primary text-white px-12 py-4 rounded-md cursor-pointer whitespace-nowrap'>
                  Apply Coupon
                </button>
              </div>

              {/* Cart Total */}
              <div className='w-full lg:w-[400px] border-2 px-6 py-8 rounded-md'>
                <h3 className='text-[24px] font-medium pb-3'>Cart Total</h3>
                <div className='flex justify-between items-center pt-3 pb-3 border-b-2 border-gray-400'>
                  <span className='text-[18px]'>Subtotal:</span>
                  <span className='text-[18px]'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center pt-3 pb-3 border-b-2 border-gray-400'>
                  <span className='text-[18px]'>Shipping:</span>
                  <span className='text-[18px]'>Free</span>
                </div>
                <div className='flex justify-between items-center pt-3 pb-3'>
                  <span className='text-[18px]'>Total:</span>
                  <span className='text-[18px]'>${subtotal.toFixed(2)}</span>
                </div>
                <button onClick={()=> handleNavigation("/Checkout")} className='flex items-center justify-center mx-auto mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                  Process to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart