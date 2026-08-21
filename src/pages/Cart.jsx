import React from 'react'
import Container from '../components/Container'
import BreadCrump from '../components/BreadCrump'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Cart = () => {

  const navigate = useNavigate()

  const data = useSelector(state => state.products.Cart)

  return (
    <div className='mt-20 mb-35'>
      <Container>
        <div>
          <BreadCrump />

          <div className='mt-20'>
            <div className='flex justify-between px-10 py-6 rounded-sm shadow-sm'>
              <h4>Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
            </div>

            {
              data.map((item) => {

                return <CartItem
                  imgSrc={item.thumbnail}
                  id={item.id}
                  title={(item.title).slice(0, 15)}
                  price={item.price}
                  subTotal={item.price}
                />

              })
            }
          </div>

          <div>
            <div className='flex justify-between items-center pt-6'>
              <button onClick={() => navigate("/shop")} className='border border-gray-400 font-semibold px-12 py-4 rounded-sm cursor-pointer hover:bg-gray-100 duration-200'>Return To Shop</button>
              <button className='border border-gray-400 font-semibold px-12 py-4 rounded-sm cursor-pointer hover:bg-gray-100 duration-200'>Update Cart</button>
            </div>
            <div className='flex justify-between item-center pt-20'>
              <div className='flex items-center gap-4'>
                <input type="text" placeholder='Coupon Code' className='border pl-6 pr-30 py-4 text-xl outline-none rounded-md' />
                <button className='bg-primary text-white px-12 py-4 rounded-md cursor-pointer'>Apply Coupon</button>
              </div>

              <div className='border'>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart
