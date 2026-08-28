import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Slider from "react-slick";
import Card from './Card';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
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

    // Custom next arrow for slider
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11.5 lg:h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center absolute -top-12 sm:-top-16 lg:-top-20 right-0 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={onClick}
            >
                <GoArrowRight className='text-lg sm:text-xl lg:text-2xl text-black' />
            </div>
        );
    }

    // Custom prev arrow for slider
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11.5 lg:h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center absolute -top-12 sm:-top-16 lg:-top-20 right-12 sm:right-14 lg:right-15 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={onClick}
            >
                <GoArrowLeft className='text-lg sm:text-xl lg:text-2xl text-black' />
            </div>
        );
    }

    const SliderComponent = Slider?.default ?? Slider;

    // Slider settings for large screens
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='pt-10 sm:pt-14 lg:pt-17.75'>
            <Container>
                {/* Section header */}
                <div className='relative'>
                    <SecHead
                        title="Our Products"
                        heading="Explore Our Products"
                    />
                </div>

                <div className='mt-6 sm:mt-8 lg:mt-15'>
                    {/* Slider for large screens (lg and above) */}
                    <div className='hidden lg:block'>
                        <SliderComponent {...settings}>
                            {products.map((product) => (
                                <div key={product.id} className="px-2">
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
                        </SliderComponent>
                    </div>

                    {/* Grid for mobile and tablet (below lg) */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-6'>
                        {products.map((product) => (
                            <div key={product.id} className="rounded-lg">
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
                    <button className='block mx-auto mt-6 sm:mt-8 lg:mt-10 px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 bg-primary rounded-sm text-white cursor-pointer text-sm sm:text-base hover:bg-red-600 transition-colors'>
                        View All Products
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default ExploreItems