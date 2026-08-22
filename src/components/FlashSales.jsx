import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';
import Card from './Card';
import Slider from "react-slick";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';

const FlashSales = () => {

    const conduct_date = '2026-08-30 12:00:00';

    const [count, setcount] = useState({})
    const [products, setProducts] = useState([])

    useEffect(() => {
        setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setcount(countDown)
        }, 1000)
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            let data = await axios.get('https://dummyjson.com/products');
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
        <>
            <div className='boxss pt-19.25' >
                <Container>
                    <div className='flex items-end gap-21.25'>
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
                    <div className='mt-10 pb-14.25 w-full border-b border-gray-400'>
                        <SliderComponent {...settings}>
                            {products.map((product) => (
                                <div key={product.id} className="px-3">
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

                        <button className='block mx-auto mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                            View All Products
                        </button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FlashSales