import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Container from '../components/Container'
import BreadCrump from '../components/BreadCrump'
import Card from '../components/Card'
import SecHead from '../components/SecHead'

const WishList = () => {

    const data = useSelector(state => state.products.WishList)
    const [recommend, setRecommend] = useState([])
    const [showRecommend, setShowRecommend] = useState(4)

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => setRecommend(response.data.products))
    }, [])

    return (
        <div className='mt-20 mb-35'>
            <Container>
                <BreadCrump />
                <div className='flex justify-between items-center'>
                    <span></span>
                    <button className='border border-gray-400 px-12 py-4 rounded-sm cursor-pointer'>Move All To Bag</button>
                </div>
                <div className='flex justify-center items-center flex-wrap pt-15'>
                    {
                        data.map((item) => {

                            return <Card
                                key={item.id}
                                id={item.id}
                                productDetails={item}
                                imgSrc={item.thumbnail}
                                percentage={item.discountPercentage}
                                title={item.title}
                                price={item.price}
                                discountPrice={item.price - (item.price * (item.discountPercentage / 100)).toFixed(3)}
                                rating={item.rating}
                                review={item.reviews?.length ?? 0}
                                showActions={false}
                                showDelete
                            />

                        })
                    }
                </div>
                <div className='pt-20'>
                    <div className='flex justify-between items-center'>
                        <SecHead
                            className='flex'
                            heading="Just For You" />
                        <button
                            onClick={() => setShowRecommend(recommend.length)}
                            className='border border-gray-400 px-12 py-4 rounded-sm cursor-pointer'
                        >
                            See All
                        </button>
                    </div>
                    <div className='flex flex-wrap items-center justify-center pt-15'>
                        {recommend.slice(0, showRecommend).map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                productDetails={item}
                                imgSrc={item.thumbnail}
                                percentage={item.discountPercentage}
                                title={item.title}
                                price={item.price}
                                discountPrice={item.price - (item.price * (item.discountPercentage / 100)).toFixed(3)}
                                rating={item.rating}
                                review={item.reviews?.length ?? 0}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WishList
