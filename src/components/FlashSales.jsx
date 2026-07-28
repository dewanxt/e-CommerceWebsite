import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';
import Cart from './Cart';
import Controller from "../assets/Controller.png"
import Slider from "react-slick";

const FlashSales = () => {

    const conduct_date = '2026-08-30 12:00:00';

    const [count, setcount] = useState({})

    useEffect(() => {
        setInterval(() => {

            const countDown = countDownDateAndTime(conduct_date);
            setcount(countDown)

        }, 1000)
    }, [])

    return (
        <div className='boxss mt-35 mb-20'>
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
                    <div className='mt-10'>
                        <Cart
                        imgSrc = {Controller}
                        title = "HAVIT HV-G92 Gamepad"
                        percentage = "-40"
                        price = "120"
                        discountPrice = "160"
                        review = "88"
                        />
                    </div>
            </Container>
        </div>
    )
}

export default FlashSales
