import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Card from './Card'
import axios from 'axios'

const BestSells = () => {
    const [products, setProducts] = useState([])

    // Fetch best selling products
    useEffect(() => {
        const fetchProducts = async () => {
            let data = await axios.get('https://dummyjson.com/products?limit=4');
            setProducts(data.data.products)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <div>
                <Container>
                    {/* Section header with view all button */}
                    <div className='flex sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 pt-10 sm:pt-14 lg:pt-17.5'>
                        <SecHead
                            title="This Month"
                            heading="Best Selling Products"
                        />
                        <button className='px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-primary rounded-sm text-white cursor-pointer text-sm sm:text-base hover:bg-red-600 transition-colors'>
                            View All
                        </button>
                    </div>

                    {/* Products grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7.5 pt-8 sm:pt-12 lg:pt-15'>
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                id={product.id}
                                productDetails={product}
                                imgSrc={product.thumbnail}
                                percentage={product.discountPercentage}
                                title={product.title}
                                price={product.price}
                                discountPrice={Math.round(product.price - (product.price * (product.discountPercentage / 100)))}
                                rating={product.rating}
                                review={product.reviews?.length ?? 0}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BestSells