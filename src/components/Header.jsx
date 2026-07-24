import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <div className='bg-black text-white py-3'>
      <Container>
        <div className='flex justify-between px-34'>
          <div></div>
          <p className='text-sm gap-2 flex'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className='underline font-bold'>ShopNow</span>
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
