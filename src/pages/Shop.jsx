import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import BreadCrump from '../components/BreadCrump'
import Paginate from '../components/Paginate'

const Shop = () => {

  const [products, setProducts] = useState([])
  const [value, setValue] = useState(6)

  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setProducts(data.products));

  }, [])

  return (
    <>
      <div className='boxss py-20'>
        <Container>
          <div>
            <div>
              
              <BreadCrump/>

              <div className='flex justify-between items-center'>
                <h2 className='font-bold text-xl mt-12.5'>Shop by Category</h2>
                <div className='flex gap-4 items-center'>
                  <h3>Show : </h3>
                  <div>
                    <select onChange={(e)=> setValue(e.target.value)} name="" id="" className='border border-[#D9D9D9] rounded-[5px] px-10 py-1'>
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
                  <li className='justify-between flex cursor-pointer'>
                    Woman’s Fashion
                  </li>
                  <li className='justify-between flex cursor-pointer'>
                    Men’s Fashion
                  </li>
                  <li><a href="/electronics">Electronics</a></li>
                  <li><a href="/home_&_lifestyle">Home & Lifestyle</a></li>
                  <li><a href="/medicine">Medicine</a></li>
                  <li><a href="/sports_&_outdoor">Sports & Outdoor</a></li>
                  <li><a href="/health_&_beauty">Health & Beauty</a></li>
                  <li><a href="/groceries">Groceries &</a></li>
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
                <Paginate itemsPerPage={value} products={products} />
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
