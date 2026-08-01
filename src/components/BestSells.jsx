import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import CartImg1 from "../assets/CartImg1.png"
import CartImg2 from "../assets/CartImg2.png"
import CartImg3 from "../assets/CartImg3.png"
import CartImg4 from "../assets/CartImg4.png"
import Cart from './Cart'

const BestSells = () => {
    return (
        <>
            <div className='boxss'>
                <Container>
                    <div className='flex justify-between pt-17.5'>
                        <SecHead
                            title="This Month"
                            heading="Best Selling Products"
                        />
                        <button className=' right-0 bottom-0 mt-10 px-12 py-4 bg-primary rounded-sm text-white cursor-pointer'>
                        View All
                    </button>
                    </div>

                    <div className='flex pt-15'>
                        <Cart
                            imgSrc={CartImg1}
                            title="The north coat"
                            price="260"
                            discountPrice="$360"
                            review="65"
                        />
                        <Cart
                            imgSrc={CartImg2}
                            title="Gucci duffle bag"
                            price="960"
                            discountPrice="$1160"
                            review="65"
                        />
                        <Cart
                            imgSrc={CartImg3}
                            title="RGB liquid CPU Cooler"
                            price="160"
                            discountPrice="$170"
                            review="65"
                        />
                        <Cart
                            imgSrc={CartImg4}
                            title="Small BookSelf"
                            price="360"
                            discountPrice=""
                            review="65"
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BestSells
