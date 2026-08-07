import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import BreadCrump from '../components/BreadCrump'
import Paginate from '../components/Paginate'
import Skeleton from '../components/Skeleton'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [value, setValue] = useState(6)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setProducts(data.products))
      .then (()=> setLoading(false))

  }, [])

    const uniqueCategories = [...new Set(products.map((item)=> item.category))]

  

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
                  {
                    uniqueCategories.map((item)=>{
                     return <li className='capitalize cursor-pointer'>{item}</li>
                    })
                    // uniqueCategories.map((category)=>{
                    //   return <li key={category}>{category}</li>
                    // })
                  }
                  {/* <li className='justify-between flex cursor-pointer'>
                    Woman’s Fashion
                  </li>
                  <li className=' flex justify-between cursor-pointer'>
                    Men’s Fashion
                  </li>
                  <li>Electronics</li>
                  <li>Home & Lifestyle</li>
                  <li>Medicine</li>
                  <li>Sports & Outdoor</li>
                  <li>Health & Beauty</li>
                  <li>Groceries &</li> */}
                </ul>
              </div>

              <div className='w-[80%]'>
                <div className='flex flex-wrap justify-between gap-y-10 gap-x-7.5 justify-between '>
                  {/* {
                    products.map((item) => {
                      return <Card
                        imgSrc={item.thumbnail}
                        percentage={item.discountPercentage}
                        title={item.title}
                        price={item.price}
                        discountPrice={item.price - (item.price * (item.discountPercentage / 100)).toFixed(3)}
                        rating={item.rating}
                        review={item.reviews.length}
                      />
                    })
                  } */}

                  {
                    loading ? 
                    <>
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      
                    </>
                      :
                      <Paginate itemsPerPage={value} products={products} />
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
