import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import BreadCrump from '../components/BreadCrump'
import Paginate from '../components/Paginate'
import Skeleton from '../components/Skeleton'
import { ProductReducer } from '../Slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [value, setValue] = useState(6)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const data = useSelector(state => state.products.value)

  const getAllProducts = async () => {
    let data = await axios.get('https://dummyjson.com/products')
    dispatch(ProductReducer(data.data.products))
    setProducts(data.data.products)
    setLoading(false)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const uniqueCategories = [...new Set(products.map((item) => item.category))]

  const handleCategories = (item) => {
    const uniCategory = products.filter((categoryItem) => categoryItem.category === item)
    dispatch(ProductReducer(uniCategory))
    // console.log('Filtered category:', item, uniCategory)
  }

  return (
    <>
      <div className='boxss py-20'>
        <Container>
          <div>
            <div>

              <BreadCrump />

              <div className='flex justify-between items-center'>
                <h2 className='font-bold text-xl mt-12.5'>Shop by Category</h2>
                <div className='flex gap-4 items-center'>
                  <h3>Show : </h3>
                  <div>
                    <select onChange={(e) => setValue(e.target.value)} name="" id="" className='border border-[#D9D9D9] rounded-[5px] px-10 py-1'>
                      <option value="6">6</option>
                      <option value="9">9</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-between'>
              <div className=' w-[20%] '>
                <ul className='text-xl pt-10 space-y-4 w-54.25'>
                  <li onClick={() => dispatch(ProductReducer(products))} className='cursor-pointer'>All Products</li>
                  {
                    uniqueCategories.map((item) => {
                      return <li onClick={() => handleCategories(item)} className='capitalize cursor-pointer '>{item}</li>
                    })

                  }
                </ul>
              </div>

              <div className='w-[80%]'>
                <div>
                  {
                    loading ?
                      <div className=' flex flex-wrap justify-between gap-y-10 gap-x-7.5 '>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </div>
                      :
                      <Paginate itemsPerPage={value} />
                  }
                </div>
              </div>
            </div>
          </div>



        </Container>

      </div>
    </>
  )
}

export default Shop
