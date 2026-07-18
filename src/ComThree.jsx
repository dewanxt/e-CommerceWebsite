import React, { useContext } from 'react'
import { ContextProvider } from './ContextApi'

const ComThree = () => {
  const { count, increment } = useContext(ContextProvider)
  return (
    <div className='p-10 border border-white rounded-sm mx-auto mt-10 w-100'>
      <h1 className='text-2xl text-center mb-10'>{count}</h1>
      <button onClick={increment} className='px-4 py-2 rounded-xs border border-white mx-auto block'>
        Increment
      </button>
    </div>
  )
}

export default ComThree
