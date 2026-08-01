import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Slider from "react-slick";
import Cart from './Cart';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import CartImg5 from "../assets/CartImg5.png"
import CartImg6 from "../assets/CartImg6.png"
import CartImg7 from "../assets/CartImg7.png"
import CartImg8 from "../assets/CartImg8.png"

const ExploreItems = () => {

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
        <div className=' boxss pt-17.75'>
            <Container>
                <div>
                    <SecHead
                        title="Our Products"
                        heading="Explore Our Products"
                    />
                </div>
                <div>
                    <SliderComponent {...settings} className='pt-15'>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg5}
                                    title="Breed Dry Dog Food"
                                    percentage=""
                                    price="100"
                                    discountPrice=""
                                    review="35"
                                />
                                <Cart
                                    imgSrc={CartImg5}
                                    title="Breed Dry Dog Food"
                                    percentage=""
                                    price="100"
                                    discountPrice=""
                                    review="35"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg6}
                                    title="CANON EOS DSLR Camera"
                                    percentage=""
                                    price="360"
                                    discountPrice=""
                                    review="95"
                                />
                                <Cart
                                    imgSrc={CartImg6}
                                    title="CANON EOS DSLR Camera"
                                    percentage=""
                                    price="360"
                                    discountPrice=""
                                    review="95"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg7}
                                    title="ASUS FHD Gaming Laptop"
                                    percentage=""
                                    price="700"
                                    discountPrice=""
                                    review="325"
                                />
                                <Cart
                                    imgSrc={CartImg7}
                                    title="ASUS FHD Gaming Laptop"
                                    percentage=""
                                    price="700"
                                    discountPrice=""
                                    review="325"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg8}
                                    title="Curology Product Set "
                                    percentage=""
                                    price="500"
                                    discountPrice=""
                                    review="145"
                                />
                                <Cart
                                    imgSrc={CartImg8}
                                    title="Curology Product Set "
                                    percentage=""
                                    price="500"
                                    discountPrice=""
                                    review="145"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg5}
                                    title="Breed Dry Dog Food"
                                    percentage=""
                                    price="100"
                                    discountPrice=""
                                    review="35"
                                />
                                <Cart
                                    imgSrc={CartImg5}
                                    title="Breed Dry Dog Food"
                                    percentage=""
                                    price="100"
                                    discountPrice=""
                                    review="35"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg6}
                                    title="CANON EOS DSLR Camera"
                                    percentage=""
                                    price="360"
                                    discountPrice=""
                                    review="95"
                                />
                                <Cart
                                    imgSrc={CartImg6}
                                    title="CANON EOS DSLR Camera"
                                    percentage=""
                                    price="360"
                                    discountPrice=""
                                    review="95"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg7}
                                    title="ASUS FHD Gaming Laptop"
                                    percentage=""
                                    price="700"
                                    discountPrice=""
                                    review="325"
                                />
                                <Cart
                                    imgSrc={CartImg7}
                                    title="ASUS FHD Gaming Laptop"
                                    percentage=""
                                    price="700"
                                    discountPrice=""
                                    review="325"
                                />
                            </div>
                            <div className='space-y-15'>
                                <Cart
                                    imgSrc={CartImg8}
                                    title="Curology Product Set "
                                    percentage=""
                                    price="500"
                                    discountPrice=""
                                    review="145"
                                />
                                <Cart
                                    imgSrc={CartImg8}
                                    title="Curology Product Set "
                                    percentage=""
                                    price="500"
                                    discountPrice=""
                                    review="145"
                                />
                            </div> 

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
