import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { assets, productsDummyData } from '../assets/assets';
import Rating from '../Components/Rating';
import { useNavigate } from 'react-router-dom';
import Featured from '../Components/Featured';
import useCartStore from '../Store/useCartStore';
const ProductDetails = () => {
    const {addToCart}=useCartStore();
    const navigate=useNavigate();
    const { id } = useParams();
    const product = productsDummyData.find(p => p._id === id);
    if (!product) {
        return <div>Product Not Available</div>
    }
    return (
        <div className='px-6 md:px-16 lg:px-32 pt-14 space-y-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
                <div className='p-5 md:shadow-xl/10 pt-2 flex flex-col justify-center items'>
                    <div className='flex items-center justify-center mb-4'>
                        <img className='bg-gray-200 rounded-2xl w-96' src={product.image[0]} alt="" />
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className="flex flex-wrap gap-4">
                            {
                                product.image.length < 2 ? (
                                    <div className='rounded-xl bg-gray-200'>
                                        <img src={product.image[0]} alt="" />
                                    </div>
                                ) : (
                                    product.image.map((img, idx) => (
                                        <div key={idx} className='rounded-xl bg-gray-200'>
                                            <img src={img} alt={`product-${idx}`} className='bg-gray-300 rounded-2xl' />
                                        </div>
                                    ))
                                )
                            }
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-10 shadow-xl/10 p-3 md:pl-8 justify-center pt-2'>
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <div className='flex gap-2'><Rating /><span>(4.5)</span></div>
                    <p className='text-base'>{product.description}</p>
                    <div className='flex gap-5 items-center '>
                        <p className='text-3xl font-medium text-gray-800'>${product.offerPrice}</p>
                        <p className='line-through text-gray-600'>{product.price}</p>
                    </div>
                    <hr className='text-gray-300' />
                    <div className='overflow-x-auto '>
                        <table className='table-auto text-left border-collapse w-full max-w-72'>
                            <tbody>
                                <tr>
                                    <th className='text-gray-600 font-medium'>Brand</th>
                                    <td className='text-gray-400 '>Generic</td>
                                </tr>
                                <tr>
                                    <th className='text-gray-600 font-medium'>Color</th>
                                    <td className='text-gray-400 '>Multi</td>
                                </tr>
                                <tr>
                                    <th className='text-gray-600 font-medium'>Category</th>
                                    <td className='text-gray-400 '>{product.category}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-10 md:flex flex gap-2 mb-19 md:justify-center md:items-center'>

                        <button onClick={()=>addToCart(product)} className='md:px-16 md:py-2  px-10 flex gap-3 text-[15px]  bg-gray-100 cursor-pointer rounded-xs'>Add to Cart</button>
                        <button onClick={()=>{navigate('/cart'); addToCart(product)}}  className='md:px-16 md:py-2 px-10 bg-orange-400 rounded-xs text-white cursor-pointer'>Buy Now</button>
                    </div>
                </div>
            </div>
            <Featured cat={product.category} />
        </div>
    )
}

export default ProductDetails
