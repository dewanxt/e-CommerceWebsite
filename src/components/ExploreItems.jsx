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

    useEffect(() => {
        const fetchProducts = async () => {
            let data = await axios.get('https://dummyjson.com/products?limit=8');
            setProducts(data.data.products)
        }
        fetchProducts()
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className=" w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center absolute -top-20 right-0 cursor-pointer "
                onClick={onClick}
            >
                <GoArrowRight className='text-2xl text-black ' />

            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className=" w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center absolute -top-20 right-15 cursor-pointer "
                onClick={onClick}
            >
                <GoArrowLeft className='text-2xl text-black ' />

            </div>
        );
    }

    const SliderComponent = Slider?.default ?? Slider;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='pt-17.75'>
            <Container>
                <div>
                    <SecHead
                        title="Our Products"
                        heading="Explore Our Products"
                    />
                </div>
                <div>
                    <SliderComponent {...settings} className='pt-15'>
                        {products.map((product, index) => (
                            <div key={product.id} className='space-y-15'>
                                <Card
                                    id={product.id}
                                    productDetails={product}
                                    imgSrc={product.thumbnail}
                                    percentage={product.discountPercentage}
                                    title={product.title}
                                    price={product.price}
                                    discountPrice={product.price - (product.price * (product.discountPercentage / 100)).toFixed(3)}
                                    rating={product.rating}
                                    review={product.reviews?.length ?? 0}
                                />
                                {products[index + 1] && (
                                    <Card
                                        id={products[index + 1].id}
                                        productDetails={products[index + 1]}
                                        imgSrc={products[index + 1].thumbnail}
                                        percentage={products[index + 1].discountPercentage}
                                        title={products[index + 1].title}
                                        price={products[index + 1].price}
                                        discountPrice={products[index + 1].price - (products[index + 1].price * (products[index + 1].discountPercentage / 100)).toFixed(3)}
                                        rating={products[index + 1].rating}
                                        review={products[index + 1].reviews?.length ?? 0}
                                    />
                                )}
                            </div>
                        ))}
                    </SliderComponent>
                    <button className=' block mx-auto mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                        View All Products
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default ExploreItems