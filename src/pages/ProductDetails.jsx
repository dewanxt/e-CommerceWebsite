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

    const getAllProducts = async () => {
        let data = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(data.data)
        setImages(data.data.images)
    }

    useEffect(() => {
        getAllProducts()
    }, [])



    return (
        <>
            <div className='boxss pt-20 pb-40'>
                <Container>
                    <BreadCrump />

                    <div className=' flex justify-between mt-20'>
                        <div className='flex gap-7.5'>
                            <div className='space-y-4 '>
                                {
                                    images.map((item) => <img className='w-40.5 h-42.5 bg-secondary' src={item} alt="" />)
                                }
                            </div>
                            <div>
                                <img className='w-125 h-150 bg-secondary' src={product.thumbnail} alt="" />
                            </div>
                        </div>
                        <div className='w-100 bprder-b'>
                            <h2 className='text-2xl font-semibold'>{product.title}</h2>
                            <div className='flex gap-2 py-4'>
                                <Rate allowHalf value={product.rating} />
                                <h4>({product?.reviews && product.reviews.length} Reviews)</h4>
                                <h4 className='text-green-400 border-l pl-2'>{product.availabilityStatus}</h4>
                            </div>
                            <h2 className='text-2xl'>${product.price}</h2>
                            <p className='py-6 border-b'>{product.description}</p>


                            {/* buying part */}
                            <div className=" flex items-center justify-between pt-6">

                                <div className="max-w-md rounded-lg font-sans">

                                    <div className="flex items-center flex-wrap mb-4">
                                        <span className="text-xl mr-3 min-w-15">Colours:</span>
                                    </div>


                                    <div className="flex items-center flex-wrap mb-4">
                                        <span className="text-xl mr-3 min-w-15">Size:</span>
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white text-black hover:bg-primary hover:text-white cursor-pointer transition-all duration-200">
                                                XS
                                            </button>
                                            <button className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white text-black hover:bg-primary hover:text-white cursor-pointer transition-all duration-200">
                                                S
                                            </button>
                                            <button className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white text-black hover:bg-primary hover:text-white transition-all duration-200">
                                                M
                                            </button>
                                            <button className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white text-black hover:bg-primary hover:text-white cursor-pointer transition-all duration-200">
                                                L
                                            </button>
                                            <button className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white text-black hover:bg-primary hover:text-white cursor-pointer transition-all duration-200">
                                                XL
                                            </button>
                                        </div>
                                    </div>


                                    <div className="flex items-center flex-wrap mb-4">
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden mr-3">
                                            <button className="px-3.5 py-1.5 border-none cursor-pointer text-xl font-bold text-black hover:bg-primary hover:text-white transition-colors">
                                                −
                                            </button>
                                            <span className="px-4 py-1.5 text-base border-x border-gray-300 min-w-7.5 text-center">
                                                1
                                            </span>
                                            <button className="px-3.5 py-1.5 border-none cursor-pointer text-xl font-bold text-black hover:bg-primary hover:text-white transition-colors">
                                                +
                                            </button>
                                        </div>
                                        <button className="px-12 py-2.5 bg-primary text-white border-none rounded cursor-pointer text-base">
                                            Buy Now
                                        </button>
                                        <div className='ml-5 p-2.5 text-xl font-bold border border-gray-300 rounded hover:bg-primary hover:text-white transition-colors'>
                                            <IoHeartOutline />
                                        </div>
                                    </div>


                                    <div className="mt-10 w-100 border border-gray-400 rounded">
                                        <div className=" flex items-center pt-6 pb-4 pr- border-b border-gray-400">
                                            <TbTruckDelivery className='text-3xl' />
                                            <div>
                                                <span className=" font-semibold block text-gray-800 text-lg">Free Delivery</span>
                                                <span className=" text-base underline">
                                                    Enter your postal code for Delivery Availability
                                                </span>
                                            </div>
                                        </div>
                                        <div className=" deliv flex items-center pt-6 pb-4 pr-">
                                            <GrPowerCycle className='text-3xl' />

                                            <div>
                                                <span className="font-semibold block text-gray-800 text-lg">Return Delivery</span>
                                                <span className=" text-xs underline">
                                                    Free 30 Days Delivery Returns. Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='pt-35'>
                        <SecHead
                            title="Related"
                        />
                        <Card/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductDetails
