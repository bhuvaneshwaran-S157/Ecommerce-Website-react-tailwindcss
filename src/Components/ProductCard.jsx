import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
    //  useEffect(() => {
    //     console.log(`Image for ${product.name}:`, product.image);
    //   }, [product]);
    return (
        <>
            <Link to={`/product/${product._id}`} className='cursor-pointer group relative max-w-[220px] shadow-xl  p-2 rounded-lg w-full flex gap-3 mb-2 items-start flex-col'>
                <div className='bg-gray-200 rounded-xl relative'>
                    <img src="" alt="whishlist" />
                    <img src={product.image[0]} key={index} alt="" />
                </div>
                <div className='flex flex-col gap-2 px-0.5'>
                    <h2 className='font-medium text-[16px] md:text-base line-clamp-1'>{product.name}</h2>
                    <p className=' line-clamp-1 text-[13px] text-gray-600 '>{product.description}</p>

                    <div className='flex'>
                        <p>4.5</p>
                        {
                            Array.from({ length: 5 }).map((_, i) => (
                                <img key={i} src={i > 3 ? assets.star_dull_icon : assets.star_icon} alt="" />
                            ))
                        }
                    </div>
                    <div className='flex gap-5 justify-between'>
                        <h3 className='font-semibold'>${product.offerPrice}</h3>
                        <button className='cursor-pointer text-xs px-2 py-1 rounded-4xl border-[1px] border-gray-500'>Buy now</button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard
