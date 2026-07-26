import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';

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
                    <SecHead />
                    <CountDown
                        Days = {count.days}
                        Hours = {count.hours}
                        Minutes = {count.minutes}
                        Seconds = {count.seconds}
                    />
                </div>
            </Container>
        </div>
    )
}

export default FlashSales
