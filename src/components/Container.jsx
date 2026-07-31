import React from 'react'

const Container = ({ children, classname }) => {
  return (
    <div classname= {`container ${classname}`} >
      {children}
    </div>
  )
}

export default Container