import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Slider from "react-slick";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";


const Categories = () => {

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
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <div className=' mt-20 boxss'>
                <Container>
                    <div className='flex items-end gap-21.25'>
                        <SecHead
                            title="Categories"
                            heading="Browse By Category"
                        />
                    </div>
                    <div className=' mt-10 pb-14.25 w-full'>
                    <SliderComponent {...settings}>
                        <div>
                            
                        </div>
                       
                    </SliderComponent>
                </div>
                </Container>
            </div>
        </>
    )
}

export default Categories
