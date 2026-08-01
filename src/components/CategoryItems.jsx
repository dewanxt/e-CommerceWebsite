import React from 'react'

const CategoryItems = ({title, children}) => {
    return (
        <>
            <div className='w-42.5 border border-gray-300 rounded-sm mt-15 pt-6.25 mx-auto text-center group hover:bg-primary hover:border-none categoryItems'>
                <div className='svgIcon1'>
                   {children}
                </div>
                


                <h3 className='group-hover:text-white p-4'>{title}</h3>
            </div>
        </>
    )
}

export default CategoryItems
