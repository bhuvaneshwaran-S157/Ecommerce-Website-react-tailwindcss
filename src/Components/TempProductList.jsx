import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import ProductCard from './ProductCard';

const TempProductList = () => {
    const { allProducts } = useContext(AppContext);
    return (
        <div className='w-full mt-5 flex flex-col md:px-24 px-15  mb-10'>
            <h1 className='text-2xl font-semibold mb-5'>Popular Products</h1>
        <div className='grid lg:grid-cols-5 mt-3 md:grid-cols-3   grid-cols-2 gap-5 w-full '>

            {
allProducts.map((product,index)=>{
    return <ProductCard product={product} key={index}/>
})
            }
        </div>
        <div className='max-w-full flex justify-center mt-7'>
        <button className='text-gray-500 px-5 py-2 border-[1px] cursor-pointer hover:text-gray-600 hover:bg-gray-100'>See More</button>
        </div>
        </div>
    )
}

export default TempProductList
