import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Card from './Card'
import axios from 'axios'

const BestSells = () => {
    const [products, setProducts] = useState([])

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
                    <div className='flex justify-between pt-17.5'>
                        <SecHead
                            title="This Month"
                            heading="Best Selling Products"
                        />
                        <button className=' right-0 bottom-0 mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                            View All
                        </button>
                    </div>

                    <div className='flex pt-15'>
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                imgSrc={product.thumbnail}
                                title={product.title}
                                price={product.price}
                                discountPrice={product.discountPercentage ? `$${Math.round(product.price / (1 - product.discountPercentage / 100))}` : ""}
                                review={product.rating}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BestSells