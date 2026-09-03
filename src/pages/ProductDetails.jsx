import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import BreadCrump from '../components/BreadCrump'
import { Rate } from 'antd'
import { useParams } from 'react-router'
import axios from 'axios'
import { IoHeartOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import SecHead from '../components/SecHead'
import Card from '../components/Card'

const ProductDetails = () => {

    let { id } = useParams()

    let [product, setProduct] = useState([])
    let [images, setImages] = useState([])
    let [relatedProducts, setRelatedProducts] = useState([])

    const getAllProducts = async () => {
        let [productResponse, productsResponse] = await Promise.all([
            axios.get(`https://dummyjson.com/products/${id}`),
            axios.get('https://dummyjson.com/products')
        ])

        const currentProduct = productResponse.data
        setProduct(currentProduct)
        setImages(currentProduct.images)
        setRelatedProducts(
            productsResponse.data.products.filter((item) => (
                item.category === currentProduct.category && item.id !== currentProduct.id
            ))
        )
    }

    useEffect(() => {
        getAllProducts()
    }, [id])

    return (
        <>
            <div className='pt-20 pb-40'>
                <Container>
                    <BreadCrump />

                    {/* Changed to flex-col on mobile, flex-row on desktop */}
                    <div className='flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 gap-10'>
                        
                        {/* Image Section */}
                        <div className='flex flex-col-reverse lg:flex-row gap-4 w-full lg:w-1/2'>
                            
                            {/* Thumbnails: Flex-row scroll on mobile, flex-col on desktop */}
                            <div className='flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0'>
                                {
                                    images.map((item) => (
                                        <img 
                                            key={item} 
                                            className='w-20 h-20 lg:w-24 lg:h-24 object-cover bg-[#F5F5F5] cursor-pointer shrink-0' 
                                            src={item} 
                                            alt="" 
                                        />
                                    ))
                                }
                            </div>

                            {/* Main Image */}
                            <div className='flex-1'>
                                <img 
                                    className='w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover bg-[#F5F5F5] rounded' 
                                    src={product.thumbnail} 
                                    alt="" 
                                />
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-2xl lg:text-3xl font-semibold'>{product.title}</h2>
                            
                            <div className='flex flex-wrap gap-2 py-4 items-center'>
                                <Rate allowHalf value={product.rating} />
                                <h4 className='text-gray-500 text-sm'>({product?.reviews && product.reviews.length} Reviews)</h4>
                                <h4 className='text-green-500 border-l border-gray-300 pl-2 text-sm'>{product.availabilityStatus}</h4>
                            </div>
                            
                            <h2 className='text-2xl font-semibold'>${product.price}</h2>
                            
                            <p className='py-4 lg:py-6 border-b border-gray-200 text-gray-600'>{product.description}</p>

                            {/* Buying part */}
                            <div className="flex items-center justify-between pt-6">
                                <div className="w-full">
                                    
                                    {/* Colors */}
                                    <div className="flex items-center mb-4">
                                        <span className="text-lg lg:text-xl mr-4 w-16">Colours:</span>
                                        <div className='flex gap-2'>
                                            <button className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-red-500 border border-gray-300"></button>
                                            <button className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-500 border border-gray-300"></button>
                                        </div>
                                    </div>

                                    {/* Sizes */}
                                    <div className="flex items-center mb-4">
                                        <span className="text-lg lg:text-xl mr-4 w-16">Size:</span>
                                        <div className="flex flex-wrap gap-2">
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border border-gray-300 rounded text-xs lg:text-sm bg-white text-black hover:bg-[#DB4444] hover:text-white cursor-pointer transition-all duration-200">XS</button>
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border border-gray-300 rounded text-xs lg:text-sm bg-white text-black hover:bg-[#DB4444] hover:text-white cursor-pointer transition-all duration-200">S</button>
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border border-gray-300 rounded text-xs lg:text-sm bg-white text-black hover:bg-[#DB4444] hover:text-white cursor-pointer transition-all duration-200">M</button>
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border border-gray-300 rounded text-xs lg:text-sm bg-white text-black hover:bg-[#DB4444] hover:text-white cursor-pointer transition-all duration-200">L</button>
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border border-gray-300 rounded text-xs lg:text-sm bg-white text-black hover:bg-[#DB4444] hover:text-white cursor-pointer transition-all duration-200">XL</button>
                                        </div>
                                    </div>

                                    {/* Quantity and Buy Now */}
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border-none cursor-pointer text-lg lg:text-xl font-bold text-black hover:bg-[#DB4444] hover:text-white transition-colors">−</button>
                                            <span className="px-4 py-1.5 lg:px-5 lg:py-2 text-sm lg:text-base border-x border-gray-300 text-center">1</span>
                                            <button className="px-3 py-1.5 lg:px-4 lg:py-2 border-none cursor-pointer text-lg lg:text-xl font-bold text-black hover:bg-[#DB4444] hover:text-white transition-colors">+</button>
                                        </div>
                                        <button className="px-8 lg:px-10 py-2.5 lg:py-3 bg-[#DB4444] text-white border-none rounded cursor-pointer text-sm lg:text-base font-medium hover:bg-red-700 transition-colors">
                                            Buy Now
                                        </button>
                                        <div className='p-2.5 lg:p-3 text-lg lg:text-xl border border-gray-300 rounded hover:bg-[#DB4444] hover:text-white cursor-pointer transition-colors'>
                                            <IoHeartOutline />
                                        </div>
                                    </div>

                                    {/* Delivery Info */}
                                    <div className="mt-8 w-full border border-gray-200 rounded">
                                        <div className="flex items-center py-4 px-4 border-b border-gray-200 gap-4">
                                            <TbTruckDelivery className='text-2xl lg:text-3xl shrink-0' />
                                            <div>
                                                <span className="font-semibold block text-gray-800 text-base lg:text-lg">Free Delivery</span>
                                                <span className="text-xs lg:text-sm underline text-gray-600">
                                                    Enter your postal code for Delivery Availability
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center py-4 px-4 gap-4">
                                            <GrPowerCycle className='text-2xl lg:text-3xl shrink-0' />
                                            <div>
                                                <span className="font-semibold block text-gray-800 text-base lg:text-lg">Return Delivery</span>
                                                <span className="text-xs lg:text-sm underline text-gray-600">
                                                    Free 30 Days Delivery Returns. Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className='pt-32'>
                        <SecHead title="Related" />
                        {/* Changed grid to be responsive */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10'>
                            {relatedProducts.slice(0, 4).map((item) => (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    productDetails={item}
                                    imgSrc={item.thumbnail}
                                    percentage={item.discountPercentage}
                                    title={item.title}
                                    price={item.price}
                                    discountPrice={Math.round(item.price - (item.price * (item.discountPercentage / 100)))}
                                    rating={item.rating}
                                    review={item.reviews?.length ?? 0}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductDetails