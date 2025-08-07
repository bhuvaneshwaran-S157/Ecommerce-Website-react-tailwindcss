import React from 'react'
import { assets } from '../assets/assets';

const Rating = () => {
    const rating = 4.5;
    return (
        <div className='flex gap-1'>
            {
                Array.from({ length: 5 }).map((_, i) => (
                    <img className='w-5' key={i} src={i > 3 ? assets.star_dull_icon : assets.star_icon} alt="" />
                ))
            }
        </div>
    )
}

export default Rating
