import React from 'react'
import Container from './Container'
import BannerImg from '../assets/BannerImg.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";


const SliderComponent = Slider?.default ?? Slider;

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        appendDots: dots => (
            <div className="">
                <ul className=" absolute bottom-4 left-[50%] translate-[-50%]">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3.5 h-3.5 bg-[#828282] rounded-full"></div>
        ),
    };

    return (
        <div className='pb-38.5'>
            <Container>
                <div className='boxss flex'>
                    <div className='w-[20%] border-r'>
                        <ul className='text-xl pt-10 space-y-4 w-54.25'>
                            <li className='justify-between flex cursor-pointer'>
                                Woman’s Fashion
                                <IoIosArrowForward className='my-auto' />
                            </li>
                            <li className='justify-between flex cursor-pointer'>
                                Men’s Fashion
                                <IoIosArrowForward className='my-auto' />
                            </li>
                            <li><a href="/electronics">Electronics</a></li>
                            <li><a href="/home_&_lifestyle">Home & Lifestyle</a></li>
                            <li><a href="/medicine">Medicine</a></li>
                            <li><a href="/sports_&_outdoor">Sports & Outdoor</a></li>
                            <li><a href="/health_&_beauty">Health & Beauty</a></li>
                            <li><a href="/groceries">Groceries &</a></li>
                        </ul>
                    </div>
                    <div className='w-[80%]'>
                        <div className='pt-10.25 pl-12.25'>
                            <div className='relative w-350'>
                                <SliderComponent {...settings} className='w-full'>
                                    <div>
                                        <img src={BannerImg} alt="/BannerImg" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={BannerImg} alt="/BannerImg" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={BannerImg} alt="/BannerImg" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={BannerImg} alt="/BannerImg" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={BannerImg} alt="/BannerImg" className='w-full' />
                                    </div>
                                </SliderComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
