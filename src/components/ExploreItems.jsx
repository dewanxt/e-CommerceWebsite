import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Card from './Card';
import axios from 'axios';

const ExploreItems = () => {
    const [products, setProducts] = useState([])

    // Fetch products for explore section
    useEffect(() => {
        const fetchProducts = async () => {
            let data = await axios.get('https://dummyjson.com/products?limit=8');
            setProducts(data.data.products)
        }
        fetchProducts()
    }, [])

    return (
        <div className='pt-10 sm:pt-14 lg:pt-17.75'>
            <Container>
                {/* Section header */}
                <div>
                    <SecHead
                        title="Our Products"
                        heading="Explore Our Products"
                    />
                </div>

                <div className='mt-6 sm:mt-8 lg:mt-15'>
                    {/* Products grid - responsive columns */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
                        {products.map((product) => (
                            <div key={product.id} className="transition-all duration-300 hover:shadow-lg rounded-lg">
                                <Card
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
                            </div>
                        ))}
                    </div>
                    
                    {/* View all products button */}
                    <button className='block mx-auto mt-6 sm:mt-8 lg:mt-10 px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 bg-primary rounded-sm text-white cursor-pointer text-sm sm:text-base hover:bg-red-600 transition-colors w-full sm:w-auto'>
                        View All Products
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default ExploreItems