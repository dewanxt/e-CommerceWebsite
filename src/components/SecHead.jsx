import React from 'react'

const SecHead = ({title, heading,className}) => {
    return (
        <div>
            <div className={`mx-auto ${className}`}>
                 <div className='flex items-center gap-9 '>
                <div className='w-5 h-10 bg-primary rounded-sm'></div>
                <h4 className='text-primary font-semibold'>{title}</h4>
            </div>
                <h2 className='text-[36px] font-semibold'>{heading}</h2>
            </div>
        </div>
    )
}

export default SecHead
