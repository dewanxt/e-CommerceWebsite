import React from 'react'
import Container from './Container'
import { useLocation } from 'react-router'

const BreadCrump = () => {

    let locaton = useLocation()

    let pathname = location.pathname.split ("/") 

  return (
    <div>
      <div>
        <Container>
            <div className='flex gap-4'>
                <h4>home</h4>
                <h4>/</h4>
                <h4>{pathname}</h4>
              </div>
        </Container>
      </div>
    </div>
  )
}

export default BreadCrump
