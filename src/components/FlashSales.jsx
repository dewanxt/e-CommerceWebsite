import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';
import Card from './Card';
import Controller from "../assets/Controller.png"
import Keyboard from "../assets/Keyboard.png"
import Monitor from "../assets/Monitor.png"
import Chair from "../assets/Chair.png"
import Slider from "react-slick";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";



const FlashSales = () => {

    const conduct_date = '2026-08-30 12:00:00';

    const [count, setcount] = useState({})

    useEffect(() => {
        setInterval(() => {

            const countDown = countDownDateAndTime(conduct_date);
            setcount(countDown)

        }, 1000)
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
        <div className='boxss mt-35' >
            <Container>
                <div className='flex items-end gap-21.25'>
                    <SecHead
                        title="Today’s"
                        heading="Flash Sales"
                    />
                    <CountDown
                        Days={count.days}
                        Hours={count.hours}
                        Minutes={count.minutes}
                        Seconds={count.seconds}
                    />
                </div>
                <div className=' mt-10 pb-14.25 w-full border-b border-gray-400 '>
                    <SliderComponent {...settings}>
                        <div>
                            <Card
                                imgSrc={Controller}
                                title="HAVIT HV-G92 Gamepad"
                                percentage="-40"
                                price="120"
                                discountPrice="160"
                                review="88"
                            />
                        </div>
                        <div>
                            <Card
                                imgSrc={Keyboard}
                                title="AK-900 Wired Keyboard"
                                percentage="-35"
                                price="960"
                                discountPrice="1160"
                                review="75"
                            />
                        </div>
                        <div>
                            <Card
                                imgSrc={Monitor}
                                title="IPS LCD Gaming Monitor"
                                percentage="-30"
                                price="370"
                                discountPrice="400"
                                review="99"
                            />
                        </div>
                        <div>
                            <Card
                                imgSrc={Chair}
                                title="S-Series Comfort Chair "
                                percentage="-25"
                                price="375"
                                discountPrice="160"
                                review="99"
                            />
                        </div>
                        <div>
                            <Card
                                imgSrc={Controller}
                                title="HAVIT HV-G92 Gamepad"
                                percentage="-40"
                                price="120"
                                discountPrice="160"
                                review="88"
                            />
                        </div>
                        <div>
                            <Card
                                 imgSrc={Keyboard}
                                title="AK-900 Wired Keyboard"
                                percentage="-35"
                                price="960"
                                discountPrice="1160"
                                review="75"
                            />
                        </div>
                        <div>
                            <Card
                                imgSrc={Monitor}
                                title="IPS LCD Gaming Monitor"
                                percentage="-30"
                                price="370"
                                discountPrice="400"
                                review="99"
                            />
                        </div>
                        <div>
                            <Card
                                imgSrc={Chair}
                                title="S-Series Comfort Chair "
                                percentage="-25"
                                price="375"
                                discountPrice="160"
                                review="99"
                            />
                        </div>
                    </SliderComponent>

                    <button className=' block mx-auto mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                        View All Products
                    </button>
                </div>
            </Container>
        </div >
        </>
             
    )
}

export default FlashSales
