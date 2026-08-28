import React, { useState } from 'react'
import Container from './Container'
import SlideImg1 from '../assets/Iphone 13 Series.png'
import SlideImg2 from '../assets/Iphone 14 Series.jpg'
import SlideImg3 from '../assets/Iphone 15 Series.png'
import SlideImg4 from '../assets/Iphone 16 Series.png'
import SlideImg5 from '../assets/Iphone 17 Series.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const SliderComponent = Slider?.default ?? Slider;

const Banner = () => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
    const [expandedCategory, setExpandedCategory] = useState(null)

    // Slider configuration
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div className="">
                <ul className="absolute bottom-6 sm:bottom-8 left-[50%] translate-x-[-50%] flex gap-1 sm:gap-2">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 bg-[#828282] rounded-full hover:bg-primary transition-colors"></div>
        ),
    };

    // Toggle mobile categories menu
    const toggleCategories = () => {
        setIsCategoriesOpen(!isCategoriesOpen)
    }

    // Toggle submenu expansion for fashion categories
    const toggleCategory = (category) => {
        if (expandedCategory === category) {
            setExpandedCategory(null)
        } else {
            setExpandedCategory(category)
        }
    }

    // Category list with submenu flags
    const categories = [
        { name: "Woman's Fashion", hasSubmenu: true },
        { name: "Men's Fashion", hasSubmenu: true },
        { name: "Electronics", hasSubmenu: false },
        { name: "Home & Lifestyle", hasSubmenu: false },
        { name: "Medicine", hasSubmenu: false },
        { name: "Sports & Outdoor", hasSubmenu: false },
        { name: "Health & Beauty", hasSubmenu: false },
        { name: "Groceries &", hasSubmenu: false },
    ]

    return (
        <div className='pb-8 sm:pb-12 lg:pb-19.25'>
            <Container>
                <div className='flex flex-col lg:flex-row'>
                    {/* Desktop sidebar navigation */}
                    <div className='hidden lg:block lg:w-[20%] border-r-2 border-gray-400'>
                        <ul className='text-sm xl:text-lg 2xl:text-xl pt-10 space-y-3 xl:space-y-4'>
                            <li className='justify-between flex cursor-pointer group'>
                                Woman's Fashion
                                <IoIosArrowForward className='my-auto group-hover:translate-x-1 transition-transform' />
                            </li>
                            <li className='justify-between flex cursor-pointer group'>
                                Men's Fashion
                                <IoIosArrowForward className='my-auto group-hover:translate-x-1 transition-transform' />
                            </li>
                            <li className='cursor-pointer hover:text-primary transition-colors'><a href="/electronics">Electronics</a></li>
                            <li className='cursor-pointer hover:text-primary transition-colors'><a href="/home_&_lifestyle">Home & Lifestyle</a></li>
                            <li className='cursor-pointer hover:text-primary transition-colors'><a href="/medicine">Medicine</a></li>
                            <li className='cursor-pointer hover:text-primary transition-colors'><a href="/sports_&_outdoor">Sports & Outdoor</a></li>
                            <li className='cursor-pointer hover:text-primary transition-colors'><a href="/health_&_beauty">Health & Beauty</a></li>
                            <li className='cursor-pointer hover:text-primary transition-colors'><a href="/groceries">Groceries &</a></li>
                        </ul>
                    </div>

                    {/* Main content area */}
                    <div className='w-full lg:w-[80%]'>
                        {/* Mobile categories menu */}
                        <div className='lg:hidden relative z-20 mb-4'>
                            <button
                                onClick={toggleCategories}
                                className='flex items-center gap-2 px-2 py-1 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors mt-2'
                            >
                                {isCategoriesOpen ? (
                                    <IoClose className='text-xl' />
                                ) : (
                                    <RxHamburgerMenu className='text-xl' />
                                )}
                                <span className='text-sm'>Categories</span>
                                
                            </button>

                            {/* Expandable categories dropdown */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCategoriesOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <ul className='bg-white border border-gray-200 rounded-lg shadow-lg'>
                                    {categories.map((category, index) => (
                                        <li key={index} className='border-b border-gray-100 last:border-b-0'>
                                            <div
                                                onClick={() => category.hasSubmenu ? toggleCategory(category.name) : null}
                                                className='flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors'
                                            >
                                                {category.hasSubmenu ? (
                                                    <span className='text-sm font-medium'>{category.name}</span>
                                                ) : (
                                                    <a href={`/${category.name.toLowerCase().replace(/ &/g, '_&_').replace(/ /g, '_')}`} className='text-sm block flex-1'>
                                                        {category.name}
                                                    </a>
                                                )}
                                                {category.hasSubmenu && (
                                                    expandedCategory === category.name ? (
                                                        <IoIosArrowUp className='text-gray-500' />
                                                    ) : (
                                                        <IoIosArrowDown className='text-gray-500' />
                                                    )
                                                )}
                                            </div>

                                            {/* Submenu items for fashion categories */}
                                            {category.hasSubmenu && expandedCategory === category.name && (
                                                <div className='bg-gray-50 px-4 py-2'>
                                                    <ul className='space-y-2'>
                                                        <li className='text-xs text-gray-600 hover:text-primary cursor-pointer py-1'>Dresses</li>
                                                        <li className='text-xs text-gray-600 hover:text-primary cursor-pointer py-1'>Shoes</li>
                                                        <li className='text-xs text-gray-600 hover:text-primary cursor-pointer py-1'>Accessories</li>
                                                        <li className='text-xs text-gray-600 hover:text-primary cursor-pointer py-1'>Bags</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Hero slider */}
                        <div className='pt-0 lg:pt-10.25 lg:pl-12.25'>
                            <div className='relative'>
                                <SliderComponent {...settings} className='w-full'>
                                    <div>
                                        <img src={SlideImg2} alt="SlideImg2" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={SlideImg1} alt="SlideImg1" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={SlideImg3} alt="SlideImg3" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={SlideImg4} alt="SlideImg4" className='w-full' />
                                    </div>
                                    <div>
                                        <img src={SlideImg5} alt="SlideImg5" className='w-full' />
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