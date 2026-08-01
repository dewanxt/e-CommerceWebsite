import React from 'react'
import Banner from '../components/Banner'
import FlashSales from '../components/FlashSales'
import Categories from '../components/Categories'
import BestSells from '../components/BestSells'
import ExploreItems from '../components/ExploreItems'
import NewArrivals from '../components/NewArrivals'


const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSales/>
      <Categories/>
      <BestSells/>
      <ExploreItems/>
      <NewArrivals/>
    </div>
  )
}

export default Home
