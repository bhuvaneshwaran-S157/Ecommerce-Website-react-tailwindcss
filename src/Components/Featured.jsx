import React from 'react'
import { productsDummyData } from '../assets/assets'
import ProductCard from './ProductCard';
const Featured = ({ cat }) => {
    const products = productsDummyData.filter(p => p.category === cat);
    return (
        <div>

            <div className='w-full justify-center items-center  '><h1 className='border-b-orange-600 text-3xl text-center  '>Featured <span className='text-orange-600'>Projects</span></h1></div>
            <div className='grid lg:grid-cols-5 mt-3 md:grid-cols-3   grid-cols-2 gap-5 w-full '>

                {
                    products.map((product, index) => {
                        return <ProductCard product={product} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default Featured
