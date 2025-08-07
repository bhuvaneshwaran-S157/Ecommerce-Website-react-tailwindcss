import React, { useRef } from 'react'
import { assets, featured } from '../assets/assets'

const FeaturedProducts = () => {
    const div = useRef();
    return (
        <div className='md:px-26 px-10 mb-8  max-w-full'>
            <div className='min-w-full text-center'>
                <h1 className='text-2xl'>Featured Products</h1>
                <hr className='w-2 text-center' />
                <br />
            </div>
            <div className=' gap-10 flex justify-center flex-wrap '>
                {
                    featured.map((card, index) => (
                        <div
                            key={index}
                            className='relative h-[400px] w-[350px] flex items-end rounded-xl overflow-hidden group'
                        >
                            {/* Background Image with dim on hover */}
                            <div
                                className='absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:brightness-75'
                                style={{ backgroundImage: `url(${card.image})` }}
                            ></div>
                            <div className='relative z-10 p-6 transition-all duration-300 group-hover:-translate-y-2'>
                                <h3 className='text-2xl text-white font-semibold'>{card.slogan}</h3>
                                <p className='text-white'>{card.description}</p>
                                <button className='flex gap-2 px-2 py-1 mt-3 text-white font-medium bg-orange-500 rounded-xs'>Buy Now <img src={assets.redirect_icon} alt="" /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
