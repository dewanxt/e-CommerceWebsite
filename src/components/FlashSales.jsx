import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';
import Card from './Card';
import axios from 'axios';

const FlashSales = () => {
    // Target date for flash sale countdown
    const conduct_date = '2026-08-30 12:00:00';

    const [count, setcount] = useState({})
    const [products, setProducts] = useState([])

    // Update countdown timer every second
    useEffect(() => {
        const interval = setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setcount(countDown)
        }, 1000)

        // Cleanup interval on component unmount
        return () => clearInterval(interval)
    }, [])

    // Fetch flash sale products
    useEffect(() => {
        const fetchProducts = async () => {
            let data = await axios.get('https://dummyjson.com/products');
            setProducts(data.data.products)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <div className='pt-10 sm:pt-14 lg:pt-19.25'>
                <Container>
                    {/* Section header with countdown timer */}
                    <div className='flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 lg:gap-21.25'>
                        <SecHead
                            title="Today's"
                            heading="Flash Sales"
                        />
                        <CountDown
                            Days={count.days}
                            Hours={count.hours}
                            Minutes={count.minutes}
                            Seconds={count.seconds}
                        />
                    </div>

                    <div className='mt-6 sm:mt-8 lg:mt-10 pb-8 sm:pb-10 lg:pb-14.25 w-full border-b border-gray-400'>
                        {/* Products grid - responsive columns */}
                        <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
                            {products.slice(0, 8).map((product) => (
                                <div key={product.id}>
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

                        <button className='block mx-auto mt-6 sm:mt-8 lg:mt-10 px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 bg-primary rounded-sm text-white cursor-pointer text-sm sm:text-base hover:bg-red-600 transition-colors w-full sm:w-auto'>
                            View All Products
                        </button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FlashSales