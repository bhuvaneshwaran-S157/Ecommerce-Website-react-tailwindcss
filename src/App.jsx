import React, { useState } from 'react'
import useCartStore from './Store/useCartStore'
import NavBar from './Components/NavBar'
import ImageSlider from './Components/ImageSlider'
import ProductCard from './Components/ProductCard'
import TempProductList from './Components/TempProductList'
import FeaturedProducts from './Components/FeaturedProducts'
import BuyNowCard from './Components/BuyNowCard'
import SubscribeNow from './Components/SubscribeNow'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import ProductDetails from './Pages/ProductDetails'
import Sidebar from './Components/Sidebar'
import CartPage from './Pages/CartPage';
const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='min-h-screen'>
      <NavBar onCartClick={() => setIsOpen(true)} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
        <CartPage isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
      {/* <Sidebar show={showCart} onClose={() => setShowCart(false)} /> */}
    </div>
  )
}

export default App
