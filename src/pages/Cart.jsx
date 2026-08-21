import React from 'react'
import Container from '../components/Container'
import BreadCrump from '../components/BreadCrump'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const data = useSelector(state => state.products.Cart)

  return (
    <div className='mt-20 mb-35'>
      <Container>
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
      </Container>
    </div>
  )
}

export default Cart
