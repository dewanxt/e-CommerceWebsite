import React, { createContext, useState } from 'react'
import ComOne from './ComOne'

export const ContextProvider = createContext()

const ContextApi = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((c) => c + 1)
  }

  return (
    <ContextProvider.Provider value={{ count, increment }}>
      <ComOne />
    </ContextProvider.Provider>
  )
}

export default ContextApi
