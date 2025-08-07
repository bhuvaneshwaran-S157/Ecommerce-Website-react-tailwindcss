import React from 'react'
import NavBar from '../Components/NavBar'
import ImageSlider from '../Components/ImageSlider'
import TempProductList from '../Components/TempProductList'
import FeaturedProducts from '../Components/FeaturedProducts'
import BuyNowCard from '../Components/BuyNowCard'
import SubscribeNow from '../Components/SubscribeNow'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <ImageSlider />
            <TempProductList />
            <FeaturedProducts />
            <br />
            <br />
            <br />
            <BuyNowCard />
            <br />
            <br />
            <br />
            <SubscribeNow />
        </>
    )
}

export default Home
