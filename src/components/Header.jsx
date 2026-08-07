import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='bg-black text-white py-3'>
      <Container>
        <div className='boxss flex justify-between'>
          <div></div>
          <p className='text-sm gap-2 flex'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink to="/shop"><span className='underline font-bold'>ShopNow</span></NavLink>
          </p>
          <select name="" id="" className='bg-black text-white text-sm'>
            <option value="">English</option>
            <option value="">Bangla</option>
            <option value="">Turkish</option>
            <option value="">Italian</option>
            <option value="">Greek</option>
            <option value="">Spanish</option>
            <option value="">Russian</option>
          </select>
        </div>
      </Container>
    </div>
  )
}

export default Header
