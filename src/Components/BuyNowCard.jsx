import React from 'react'
import { assets } from '../assets/assets'

const BuyNowCard = () => {
  return (
    <div className='max-w-full flex justify-center mb-7 px-10' >
      <div className='bg-gray-200 flex flex-col md:flex-row justify-between  gap-3 rounded-2xl '>
        <div className='leftImg flex justify-center items-center'>
          <img src={assets.jbl_soundbox_image} className='w-64 md:w-74  ' alt="" />
        </div>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <h1 className='text-3xl text-gray-700 font-bold'>Level Up Your Gaming Experience</h1>
          <p className='text-gray-600'>From immersive sound to precise
            controls—everything you need to win</p>
          <button className='flex gap-2 px-4 py-2 rounded-xl bg-orange-500 font-semibold text-white items-center justify-center'>Buy now <img src={assets.arrow_icon_white} alt="" /></button>
        </div>
        <div className='rightImage flex items-center justify-center'>
          <img src={assets.sm_controller_image} className='w-89  md:hidden block' alt="" />
          <img src={assets.md_controller_image} className='w-64 md:w-84 object-cover md:block hidden' alt="" />
        </div>
      </div>
    </div>
  )
}

export default BuyNowCard
